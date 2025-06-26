import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import RestaurantCard, { RestaurantCardProps } from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search } from 'lucide-react';

// Placeholder data for the restaurant list
const restaurants: RestaurantCardProps[] = [
  {
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Sushi', 'Japanese', 'Asian'],
    rating: 4.8,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'bella-italia',
    name: 'Bella Italia Pizzeria',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Pizza', 'Pasta', 'Italian'],
    rating: 4.6,
    deliveryTime: '30-45 min',
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop',
    cuisineTypes: ['Tacos', 'Mexican', 'Burritos'],
    rating: 4.7,
    deliveryTime: '15-25 min',
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=872&auto=format&fit=crop',
    cuisineTypes: ['Burgers', 'American', 'Fries'],
    rating: 4.5,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'the-green-bowl',
    name: 'The Green Bowl',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Salads', 'Healthy', 'Vegan'],
    rating: 4.9,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'pho-king',
    name: 'Pho King Good',
    imageUrl: 'https://images.unsplash.com/photo-1585101648406-8bbb5539d9ac?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Vietnamese', 'Noodles', 'Pho'],
    rating: 4.7,
    deliveryTime: '35-45 min',
  },
  {
    slug: 'curry-house',
    name: 'Curry House',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a0589133aa?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Indian', 'Curry', 'Tandoori'],
    rating: 4.6,
    deliveryTime: '40-50 min',
  },
  {
    slug: 'waffle-world',
    name: 'Waffle World',
    imageUrl: 'https://images.unsplash.com/photo-1562447413-56b3e3950153?q=80&w=870&auto=format&fit=crop',
    cuisineTypes: ['Dessert', 'Waffles', 'Breakfast'],
    rating: 4.8,
    deliveryTime: '15-25 min',
  },
];

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          {/* Page Title and Filter Controls */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Restaurants Near You</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by restaurant or cuisine..."
                  className="pl-10"
                />
              </div>
              <div className="w-full sm:w-48">
                <Select defaultValue="rating">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="delivery_time">Fastest Delivery</SelectItem>
                    <SelectItem value="recommended">Recommended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Restaurant Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
          </section>

          {/* Pagination */}
          <section>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;