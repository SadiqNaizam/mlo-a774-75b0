import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Bike, MapPin } from 'lucide-react';

// Type definition for location coordinates
type Location = {
  lat: number;
  lng: number;
};

// Props for the component
interface InteractiveMapProps {
  courierLocation?: Location;
  destinationLocation?: Location;
}

// Dummy data for demonstration purposes
const DEFAULT_COURIER_LOCATION: Location = { lat: 40, lng: 35 };
const DEFAULT_DESTINATION_LOCATION: Location = { lat: 75, lng: 70 };

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  courierLocation = DEFAULT_COURIER_LOCATION,
  destinationLocation = DEFAULT_DESTINATION_LOCATION,
}) => {
  console.log('InteractiveMap loaded');

  // Simple function to convert lat/lng to top/left percentages for display.
  // This is a visual simulation, not a real map projection.
  const getPositionStyle = (location: Location) => ({
    top: `${location.lat}%`,
    left: `${location.lng}%`,
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Live Delivery Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-muted rounded-md overflow-hidden relative border">
            {/* This div represents the map area */}

            {/* Dashed line connecting courier to destination */}
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
              <line
                x1={`${courierLocation.lng}%`}
                y1={`${courierLocation.lat}%`}
                x2={`${destinationLocation.lng}%`}
                y2={`${destinationLocation.lat}%`}
                className="stroke-foreground/50"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Courier Marker */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={getPositionStyle(courierLocation)}
              title="Courier Location"
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg z-10">
                  <Bike className="h-6 w-6" />
                </div>
                <span className="mt-2 text-xs font-bold bg-background/70 backdrop-blur-sm px-2 py-1 rounded">
                  Your Courier
                </span>
              </div>
            </div>

            {/* Destination Marker */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={getPositionStyle(destinationLocation)}
              title="Your Location"
            >
              <div className="flex flex-col items-center">
                 <MapPin className="h-10 w-10 text-destructive z-10" />
                 <span className="mt-1 text-xs font-bold bg-background/70 backdrop-blur-sm px-2 py-1 rounded">
                  Delivery Address
                </span>
              </div>
            </div>

          </div>
        </AspectRatio>
        <div className="text-center mt-4 text-sm text-muted-foreground">
          Map is for demonstration purposes only.
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;