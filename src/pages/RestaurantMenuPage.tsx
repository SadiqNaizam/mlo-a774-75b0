import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// lucide-react Icons
import { Clock, Star, ShoppingCart, JapaneseYen, Trash2 } from 'lucide-react';

// --- Placeholder Data ---

const restaurant = {
  name: 'Sushi Heaven',
  description: 'The finest authentic Japanese sushi, delivered right to your door. Our chefs use only the freshest ingredients to create an unforgettable culinary experience.',
  imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1920&auto=format&fit=crop',
  logoUrl: 'https://cdn-icons-png.flaticon.com/512/881/881453.png',
  tags: ['Sushi', 'Japanese', 'Top Rated'],
  rating: 4.8,
  isOpen: true,
  hours: '11:00 AM - 10:00 PM',
};

const appetizers = [
  { id: 'app1', name: 'Edamame', description: 'Steamed young soybeans, lightly salted. A classic starter.', price: 5.50, imageUrl: 'https://images.unsplash.com/photo-1599497793368-0734a580696e?q=80&w=800' },
  { id: 'app2', name: 'Gyoza (6 pcs)', description: 'Pan-fried pork and vegetable dumplings served with a citrus-soy dipping sauce.', price: 8.00, imageUrl: 'https://images.unsplash.com/photo-1616154696923-a16a13a8174f?q=80&w=800' },
  { id: 'app3', name: 'Agedashi Tofu', description: 'Lightly fried tofu served in a savory dashi broth with green onions and grated daikon.', price: 7.50, imageUrl: 'https://images.unsplash.com/photo-1623341214145-5910a1731d1f?q=80&w=800' },
];

const sushiRolls = [
  { id: 'roll1', name: 'California Roll', description: 'Crab meat, avocado, and cucumber wrapped in seaweed and rice.', price: 9.00, imageUrl: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=800' },
  { id: 'roll2', name: 'Spicy Tuna Roll', description: 'Minced tuna with a spicy mayo sauce, cucumber, and scallions.', price: 11.00, imageUrl: 'https://images.unsplash.com/photo-1611141654212-968e82b785d6?q=80&w=800' },
  { id: 'roll3', name: 'Dragon Roll', description: 'Eel and cucumber topped with thinly sliced avocado and eel sauce.', price: 15.50, imageUrl: 'https://images.unsplash.com/photo-1625944022353-83a3d5326555?q=80&w=800' },
  { id: 'roll4', name: 'Philadelphia Roll', description: 'Smoked salmon, cream cheese, and avocado.', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1674737237949-94aa285c5a89?q=80&w=800' },
];

// Cart item interface to include quantity
interface CartItem {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
}

const RestaurantMenuPage = () => {
    console.log('RestaurantMenuPage loaded');
    
    // For demonstration, we'll pre-populate the cart. In a real app, this would be managed by a global state.
    const [cart, setCart] = useState<CartItem[]>([
        { id: 'roll1', name: 'California Roll', price: 9.00, quantity: 2 },
        { id: 'app2', name: 'Gyoza (6 pcs)', price: 8.00, quantity: 1 },
    ]);
    
    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    const cartItemCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Restaurant Info Header */}
        <section className="relative h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.imageUrl})` }}>
          <div className="absolute inset-0 bg-black/50" />
        </section>
        
        <div className="container px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 pb-12">
            <Card className="shadow-lg overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-background flex-shrink-0">
                            <AvatarImage src={restaurant.logoUrl} alt={restaurant.name} />
                            <AvatarFallback><JapaneseYen /></AvatarFallback>
                        </Avatar>
                        <div className="w-full">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                {restaurant.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{restaurant.name}</h1>
                            <p className="text-muted-foreground mt-2">{restaurant.description}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-4">
                                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-500" /> {restaurant.rating}</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {restaurant.hours}</span>
                                <Badge variant={restaurant.isOpen ? "default" : "destructive"}>{restaurant.isOpen ? "Open Now" : "Closed"}</Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Menu Tabs */}
            <Tabs defaultValue="sushi-rolls" className="mt-8">
              <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-none md:inline-flex">
                <TabsTrigger value="sushi-rolls">Sushi Rolls</TabsTrigger>
                <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sushi-rolls" className="mt-6">
                <div className="space-y-4">
                    {sushiRolls.map(item => <MenuItemCard key={item.id} {...item} />)}
                </div>
              </TabsContent>
              <TabsContent value="appetizers" className="mt-6">
                <div className="space-y-4">
                    {appetizers.map(item => <MenuItemCard key={item.id} {...item} />)}
                </div>
              </TabsContent>
            </Tabs>
        </div>
      </main>

      {/* Floating Cart Button & Sheet */}
      <Sheet>
        <SheetTrigger asChild>
            <Button className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-40">
                <ShoppingCart className="h-6 w-6"/>
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-6 w-6 justify-center rounded-full p-0">
                    {cartItemCount}
                </Badge>
                <span className="sr-only">Open Cart</span>
            </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <SheetHeader>
                <SheetTitle>Your Order</SheetTitle>
                <SheetDescription>Review items before proceeding to checkout.</SheetDescription>
            </SheetHeader>
            {cart.length > 0 ? (
                <div className="flex-1 overflow-y-auto -mx-6 px-6">
                    <ul className="divide-y">
                        {cart.map(item => (
                            <li key={item.id} className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                    <Button variant="outline" size="icon" className="h-7 w-7">
                                        <Trash2 className="h-4 w-4 text-destructive"/>
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold">Your cart is empty</h3>
                    <p className="text-sm text-muted-foreground">Add items from the menu to get started.</p>
                </div>
            )}
            <SheetFooter>
                <div className="w-full space-y-4">
                    <Separator />
                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <span>${cartTotal}</span>
                    </div>
                    <Button size="lg" className="w-full" asChild>
                       <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                </div>
            </SheetFooter>
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;