import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

// Icons
import { CreditCard, Truck } from 'lucide-react';

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePlaceOrder = () => {
    // Here you would typically handle form submission, payment processing, etc.
    console.log('Placing order...');
    // On success, navigate to the order tracking page.
    navigate('/order-tracking');
  };
  
  const orderItems = [
    { id: 1, name: 'Spicy Tuna Roll', quantity: 2, price: 15.99 },
    { id: 2, name: 'Miso Soup', quantity: 1, price: 3.50 },
    { id: 3, name: 'Edamame', quantity: 1, price: 5.00 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 4.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container py-8 md:py-12">
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Checkout</h1>
            <p className="text-muted-foreground mt-2">Just a few more steps to get your delicious food.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Accordion for details */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    <span>1. Delivery Details</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" defaultValue="Guest User" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input id="address" placeholder="123 Main St" defaultValue="123 Flavor Town" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Anytown" defaultValue="Foodie City" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="12345" defaultValue="54321" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span>2. Payment Method</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0 pt-4">
                        <RadioGroup defaultValue="card" onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2 mb-4">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Credit or Debit Card</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" disabled />
                            <Label htmlFor="paypal">PayPal (Coming Soon)</Label>
                          </div>
                        </RadioGroup>
                        {paymentMethod === 'card' && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                                <div className="md:col-span-4 space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="•••• •••• •••• 1234" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="expiry">Expiry Date</Label>
                                    <Input id="expiry" placeholder="MM/YY" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">3. Apply Promo Code</AccordionTrigger>
                <AccordionContent>
                    <div className="flex items-center space-x-2">
                        <Input type="text" placeholder="Enter promo code" />
                        <Button type="submit" variant="secondary">Apply</Button>
                    </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your items before placing the order.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                    {orderItems.map(item => (
                        <div key={item.id} className="flex justify-between text-sm">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <Separator />
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;