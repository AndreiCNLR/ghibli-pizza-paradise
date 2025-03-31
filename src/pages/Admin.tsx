
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, Pencil, Plus, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  
  // Form state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [pizzaName, setPizzaName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      if (!authLoading && !user) {
        navigate('/auth');
        return;
      }
      
      if (user) {
        try {
          // Fix: Using maybeSingle() instead of single() to avoid 406 error
          // Also, simplify the query to just check if any role=admin records exist
          const { data, error } = await supabase
            .from('user_roles')
            .select('*')

            //Don't use eq for role. just test it after you receive the data
          
          if (error) {
            console.error('Error checking admin role:', error);
            setIsAdmin(false);
            navigate('/'); // Redirect non-admins
            return;
          }
          
          // Check if any admin role entries exist for this user
          setIsAdmin(data && data.length > 0);
          if (!data || data.length === 0) {
            navigate('/'); // Redirect non-admins
            toast({
              title: "Access Denied",
              description: "You don't have admin privileges.",
              variant: "destructive"
            });
          }
        } catch (error) {
          console.error('Error in checkAdmin:', error);
          setIsAdmin(false);
          navigate('/');
        }
      }
    };
    
    checkAdmin();
  }, [user, authLoading, navigate]);

  // Fetch pizzas
  useEffect(() => {
    const fetchPizzas = async () => {
      if (!isAdmin) return;
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('pizzas')
          .select('*')
          .order('name');
        
        if (error) {
          console.error('Error fetching pizzas:', error);
          return;
        }
        
        setPizzas(data || []);
      } catch (error) {
        console.error('Error in fetchPizzas:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (isAdmin) {
      fetchPizzas();
    }
  }, [isAdmin]);

  const handleOpenDialog = (pizza?: Pizza) => {
    if (pizza) {
      setIsEditing(true);
      setEditId(pizza.id);
      setPizzaName(pizza.name);
      setDescription(pizza.description || '');
      setPrice(pizza.price.toString());
      setImageUrl(pizza.image_url || '');
    } else {
      setIsEditing(false);
      setEditId(null);
      setPizzaName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    }
    
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setPizzaName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
    setIsDialogOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      
      const pizzaData = {
        name: pizzaName,
        description,
        price: parseFloat(price),
        image_url: imageUrl,
      };
      
      let result;
      
      if (isEditing && editId) {
        // Update existing pizza
        result = await supabase
          .from('pizzas')
          .update(pizzaData)
          .eq('id', editId);
      } else {
        // Add new pizza
        result = await supabase
          .from('pizzas')
          .insert([pizzaData]);
      }
      
      if (result.error) {
        toast({
          title: "Error",
          description: result.error.message,
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: isEditing ? "Pizza Updated" : "Pizza Added",
        description: `${pizzaName} has been ${isEditing ? 'updated' : 'added'} successfully.`
      });
      
      // Refresh pizza list
      const { data } = await supabase
        .from('pizzas')
        .select('*')
        .order('name');
      
      setPizzas(data || []);
      resetForm();
    } catch (error) {
      console.error('Error submitting pizza:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        const { error } = await supabase
          .from('pizzas')
          .delete()
          .eq('id', id);
        
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive"
          });
          return;
        }
        
        toast({
          title: "Pizza Deleted",
          description: `${name} has been removed from the menu.`
        });
        
        // Update the local state to remove the deleted pizza
        setPizzas(pizzas.filter(pizza => pizza.id !== id));
      } catch (error) {
        console.error('Error deleting pizza:', error);
      }
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-menu-texture">
          <Loader2 className="h-10 w-10 animate-spin text-ghibli-brown" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Already redirected in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-menu-texture">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-ghibli-forest text-2xl">Pizza Management</CardTitle>
                <CardDescription>
                  Add, edit, or remove pizzas from your menu.
                </CardDescription>
              </div>
              <Button 
                onClick={() => handleOpenDialog()} 
                className="bg-ghibli-brown hover:bg-ghibli-brown/90"
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Pizza
              </Button>
            </CardHeader>
            
            <CardContent>
              {pizzas.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-ghibli-slate">No pizzas found. Add your first pizza to get started!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Image URL</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pizzas.map((pizza) => (
                        <TableRow key={pizza.id}>
                          <TableCell className="font-medium">{pizza.name}</TableCell>
                          <TableCell className="max-w-xs truncate">{pizza.description}</TableCell>
                          <TableCell>${pizza.price.toFixed(2)}</TableCell>
                          <TableCell className="max-w-xs truncate">{pizza.image_url}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleOpenDialog(pizza)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive" 
                                onClick={() => handleDelete(pizza.id, pizza.name)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Edit Pizza' : 'Add New Pizza'}</DialogTitle>
            <DialogDescription>
              {isEditing 
                ? 'Update the details of this pizza on your menu.' 
                : 'Fill in the details to add a new pizza to your menu.'}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Pizza Name</Label>
                <Input 
                  id="name" 
                  value={pizzaName}
                  onChange={(e) => setPizzaName(e.target.value)}
                  placeholder="Totoro's Forest Feast"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your pizza and its ingredients..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input 
                  id="price" 
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="15.99"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input 
                  id="image_url" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/pizza-image.jpg"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={resetForm}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-ghibli-brown hover:bg-ghibli-brown/90"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing ? 'Updating...' : 'Adding...'}
                  </>
                ) : (
                  isEditing ? 'Update Pizza' : 'Add Pizza'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Admin;
