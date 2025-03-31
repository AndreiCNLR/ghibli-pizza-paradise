
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Pizza {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export const usePizzas = () => {
  return useQuery({
    queryKey: ['pizzas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pizzas')
        .select('*')
        .order('name');
      
      if (error) {
        throw new Error(error.message);
      }
      
      return data as Pizza[];
    }
  });
};

export const usePizzaById = (id: string) => {
  return useQuery({
    queryKey: ['pizzas', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pizzas')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        throw new Error(error.message);
      }
      
      return data as Pizza;
    },
    enabled: !!id
  });
};
