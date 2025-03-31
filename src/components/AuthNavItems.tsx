
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from 'lucide-react';

const AuthNavItems: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  
  if (!user) {
    return (
      <Link to="/auth">
        <Button variant="ghost" className="text-ghibli-forest hover:text-ghibli-brown hover:bg-transparent">
          Login / Sign Up
        </Button>
      </Link>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-ghibli-forest hover:text-ghibli-brown hover:bg-transparent">
          <User className="h-5 w-5 mr-2" />
          {profile?.name ? profile.name.split(' ')[0] : 'Account'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/admin" className="cursor-pointer">Admin</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthNavItems;
