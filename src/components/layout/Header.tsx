import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UtensilsCrossed, ShoppingCart, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const cartItemCount = 3; // Placeholder for cart item count

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-6 flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">ChefExpress</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for restaurants or dishes..."
            className="w-full rounded-full pl-10 md:w-2/3 lg:w-1/2"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-auto">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/checkout" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center rounded-full p-0">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  {/* <AvatarImage src="/avatars/01.png" alt="@user" /> */}
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Guest</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Welcome to ChefExpress!
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {/* Using <a> for placeholder as no auth routes exist */}
                <a href="#">Login</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sign Up</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
               <DropdownMenuItem disabled>My Orders</DropdownMenuItem>
               <DropdownMenuItem disabled>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;