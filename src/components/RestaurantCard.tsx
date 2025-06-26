import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Clock } from 'lucide-react';

export interface RestaurantCardProps {
  slug: string;
  name: string;
  imageUrl: string;
  cuisineTypes: string[];
  rating: number;
  deliveryTime: string; // e.g., "25-35 min"
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  cuisineTypes,
  rating,
  deliveryTime,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    // The entire card is a link to the restaurant's menu page.
    // In a real app, the URL would likely be dynamic, like `/restaurant-menu/${slug}`.
    // Based on the provided App.tsx, we are linking to the static route.
    <Link to="/restaurant-menu" className="block group">
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225?text=Restaurant'}
              alt={`Photo of ${name}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <h3 className="text-lg font-bold tracking-tight truncate">{name}</h3>
          
          <div className="flex flex-wrap gap-1">
            {cuisineTypes.slice(0, 3).map((cuisine) => (
              <Badge key={cuisine} variant="secondary">{cuisine}</Badge>
            ))}
            {cuisineTypes.length > 3 && (
              <Badge variant="outline">+{cuisineTypes.length - 3}</Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;