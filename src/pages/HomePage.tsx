import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard, { RestaurantCardProps } from '@/components/RestaurantCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Icons
import { Search } from 'lucide-react';

// Placeholder data for Restaurant Cards
const popularRestaurants: RestaurantCardProps[] = [
  {
    slug: 'sushi-master',
    name: 'Sushi Master',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.8,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'pizza-palace',
    name: 'The Pizza Palace',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Italian', 'Pizza', 'Pasta'],
    rating: 4.6,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'burger-barn',
    name: 'Burger Barn',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['American', 'Burgers', 'Fries'],
    rating: 4.5,
    deliveryTime: '15-25 min',
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Mexican', 'Tacos', 'Burritos'],
    rating: 4.7,
    deliveryTime: '20-30 min',
  },
];

const newRestaurants: RestaurantCardProps[] = [
  {
    slug: 'veggie-delight',
    name: 'Veggie Delight',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17025?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Vegan', 'Salads', 'Healthy'],
    rating: 4.9,
    deliveryTime: '30-40 min',
  },
  {
    slug: 'ramen-house',
    name: 'Ramen House',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Japanese', 'Noodles', 'Ramen'],
    rating: 4.8,
    deliveryTime: '25-35 min',
  },
    {
    slug: 'kebab-king',
    name: 'Kebab King',
    imageUrl: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Middle Eastern', 'Kebab', 'Wraps'],
    rating: 4.6,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'cafe-central',
    name: 'Café Central',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop',
    cuisineTypes: ['Coffee', 'Pastries', 'Sandwiches'],
    rating: 4.7,
    deliveryTime: '10-20 min',
  },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-muted/40">
           <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Your next meal, delivered.
            </h1>
            <p className="max-w-xl mx-auto mt-4 text-lg text-muted-foreground">
              Discover and order from the best local restaurants with ChefExpress.
            </p>
            <div className="flex max-w-lg mx-auto mt-8">
              <Input
                type="search"
                placeholder="Find a restaurant or a dish..."
                className="h-12 text-lg rounded-r-none focus-visible:ring-0"
              />
              <Button asChild size="lg" className="rounded-l-none">
                <Link to="/restaurant-listing">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotional Carousel */}
        <section className="py-12 md:py-16">
            <div className="container px-4">
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        <CarouselItem>
                             <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&h=400&auto=format&fit=crop" alt="Promo Banner 1" className="w-full h-auto object-cover rounded-lg aspect-[3/1]" />
                        </CarouselItem>
                        <CarouselItem>
                             <img src="https://images.unsplash.com/photo-1626202157923-937583794d48?q=80&w=1200&h=400&auto=format&fit=crop" alt="Promo Banner 2" className="w-full h-auto object-cover rounded-lg aspect-[3/1]" />
                        </CarouselItem>
                         <CarouselItem>
                             <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&h=400&auto=format&fit=crop" alt="Promo Banner 3" className="w-full h-auto object-cover rounded-lg aspect-[3/1]" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>

        {/* Popular Restaurants Section */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container px-4">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Popular Near You</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {popularRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
          </div>
        </section>

        {/* New on ChefExpress Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">New on ChefExpress</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {newRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;