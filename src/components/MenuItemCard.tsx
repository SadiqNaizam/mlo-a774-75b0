import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus, Minus, ShoppingCart } from 'lucide-react';

// Define the props interface for type safety
interface MenuItemCardProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ id, name, description, price, imageUrl }) => {
  console.log('MenuItemCard loaded for:', name);

  // State to manage the quantity of the item
  const [quantity, setQuantity] = useState(1);

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    // In a real app, you would dispatch an action to a global cart state.
    // For this component, we'll just show a toast notification.
    console.log(`Adding ${quantity} of item ${id} (${name}) to cart for $${(price * quantity).toFixed(2)}`);
    toast.success(`Added ${quantity} x ${name} to cart!`);
    
    // Reset quantity to 1 after adding to cart for a smoother user experience
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Card className="flex w-full items-center overflow-hidden p-4 transition-all duration-300 hover:shadow-md">
      {/* Image Section */}
      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mr-4">
        <img 
          src={imageUrl || 'https://via.placeholder.com/150'} 
          alt={name} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow h-full">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-primary">${price.toFixed(2)}</p>
          
          <div className="flex items-center gap-2">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-lg">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none" onClick={decrementQuantity} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="px-3 text-sm font-medium" aria-live="polite">{quantity}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Button onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;