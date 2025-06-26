import React from 'react';
import { CheckCircle, ChefHat, Bike, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define the possible states for the order status
export type OrderStatus = 'confirmed' | 'preparing' | 'delivery' | 'delivered';

// Define the structure for each step in the tracker
const steps = [
  { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle },
  { id: 'preparing', label: 'Preparing Food', icon: ChefHat },
  { id: 'delivery', label: 'Out for Delivery', icon: Bike },
  { id: 'delivered', label: 'Delivered', icon: PartyPopper },
];

interface OrderStatusTrackerProps {
  currentStatus: OrderStatus;
}

const OrderStatusTracker: React.FC<OrderStatusTrackerProps> = ({ currentStatus }) => {
  console.log(`OrderStatusTracker loaded with status: ${currentStatus}`);

  // Find the index of the current step to determine which steps are completed, active, or pending
  const currentStepIndex = steps.findIndex(step => step.id === currentStatus);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Track Your Order</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center w-full">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;
            const isPending = index > currentStepIndex;

            return (
              <React.Fragment key={step.id}>
                {/* Step Icon and Label */}
                <div className="flex flex-col items-center text-center w-24">
                  <div
                    className={cn(
                      'flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300',
                      {
                        'bg-green-500 border-green-500 text-white': isCompleted,
                        'bg-blue-500 border-blue-500 text-white scale-110': isActive,
                        'bg-gray-100 border-gray-300 text-gray-400': isPending,
                      }
                    )}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p
                    className={cn(
                      'mt-2 text-xs md:text-sm font-medium transition-colors duration-300',
                      {
                        'text-gray-800': isCompleted,
                        'text-blue-600': isActive,
                        'text-gray-500': isPending,
                      }
                    )}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Connector Line between steps */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 relative mx-2">
                    <div className="absolute w-full h-full bg-gray-200 rounded-full" />
                    <div
                      className={cn(
                        'absolute h-full bg-green-500 rounded-full transition-all duration-500 ease-in-out',
                        {
                          'w-full': isCompleted,
                          'w-0': !isCompleted,
                        }
                      )}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusTracker;