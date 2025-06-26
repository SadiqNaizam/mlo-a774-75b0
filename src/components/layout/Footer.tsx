import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const infoLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  const socialLinks = [
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'Facebook', icon: Facebook, href: '#' },
    { label: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">ChefExpress</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your favorite local restaurants, delivered to your door.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-start-3">
             <h3 className="font-semibold text-foreground mb-4">Company</h3>
             <nav className="flex flex-col space-y-2">
                {infoLinks.map((link) => (
                    <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                ))}
             </nav>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                    <Button key={social.label} variant="ghost" size="icon" asChild>
                        <a href={social.href} aria-label={social.label}>
                            <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </a>
                    </Button>
                ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ChefExpress Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;