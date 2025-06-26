import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderStatusTracker, { OrderStatus } from '@/components/OrderStatusTracker';
import InteractiveMap from '@/components/InteractiveMap';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const orderStatuses: OrderStatus[] = ['confirmed', 'preparing', 'delivery', 'delivered'];

const OrderTrackingPage: React.FC = () => {
  console.log('OrderTrackingPage loaded');

  const [currentStatus, setCurrentStatus] = useState<OrderStatus>('confirmed');

  useEffect(() => {
    // Simulate order progress
    const currentStepIndex = orderStatuses.indexOf(currentStatus);
    if (currentStepIndex < orderStatuses.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStatus(orderStatuses[currentStepIndex + 1]);
      }, 5000); // Advance to the next stage every 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [currentStatus]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Your Order is on its Way!</h1>
            <p className="text-muted-foreground mt-2">Order ID: #CHEF-12345</p>
          </div>

          <div className="mb-8">
            <OrderStatusTracker currentStatus={currentStatus} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Map */}
            <div className="lg:col-span-2">
              <InteractiveMap />
            </div>

            {/* Right Column: Order Details & Actions */}
            <div className="lg:col-span-1">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>From: Sushi Palace</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span>2x Dragon Roll</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>1x Edamame</span>
                      <span>$5.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span>1x Miso Soup</span>
                      <span>$3.00</span>
                    </li>
                  </ul>
                  <Separator className="my-4" />
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$33.50</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>$5.00</span>
                    </p>
                     <p className="flex justify-between">
                      <span className="text-muted-foreground">Taxes & Fees</span>
                      <span>$7.00</span>
                    </p>
                    <p className="flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span>$45.50</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-3">
                  <Button variant="outline" disabled>View Past Orders</Button>
                  <Link to="/restaurant-listing" className='w-full'>
                    <Button className="w-full">Order Again</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;