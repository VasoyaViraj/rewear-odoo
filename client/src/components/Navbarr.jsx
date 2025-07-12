import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, User, Plus, Search, LogOut } from "lucide-react";
import { userContext } from "@/contexts/UserContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbarr = () => {
  const { user } = useContext(userContext)
  const [isOpen, setIsOpen] = useState(false);


  const AuthenticatedNav = () => (
    <>
      <Link 
        to="/explore" 
        className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <Search className="h-4 w-4" />
        <span>Explore Clothes</span>
      </Link>
      <Link 
        to="/add-cloth" 
        className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <Plus className="h-4 w-4" />
        <span>Add Cloth</span>
      </Link>
      <Link 
        to="/profile" 
        className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <User className="h-4 w-4" />
        <span>Profile</span>
      </Link>
      
    </>
  );

  const UnauthenticatedNav = () => (
    <>
      <Button variant="ghost" className="text-charcoal hover:text-moss-green transition-colors" asChild>
        <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
      </Button>
      <Button className="bg-moss-green hover:bg-moss-green/90 text-white" asChild>
        <Link to="/register" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </Button>
    </>
  );

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-moss-green hover:text-moss-green/90 transition-colors">
          ReWear
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          {user.isAuthenticated ? (
            <>
              <Link 
                to="/explore" 
                className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
              >
                <Search className="h-4 w-4" />
                <span>Explore Clothes</span>
              </Link>
              <Link 
                to="/add-cloth" 
                className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Cloth</span>
              </Link>
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 text-charcoal hover:text-moss-green transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </>
          ) : (
            <>
              <Button variant="ghost" className="text-charcoal hover:text-moss-green transition-colors" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="bg-moss-green hover:bg-moss-green/90 text-white" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left text-moss-green">
                  {user.isAuthenticated ? `Welcome, ${user?.name}` : 'Menu'}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {user.isAuthenticated ? <AuthenticatedNav /> : <UnauthenticatedNav />}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbarr