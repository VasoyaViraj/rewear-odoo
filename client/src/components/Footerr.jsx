import { Instagram, Twitter } from "lucide-react";

const Footerr = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-2xl font-bold text-moss-green">
            ReWear
          </div>
          
          <nav className="flex space-x-8">
            <a href="#" className="text-ash-gray hover:text-moss-green transition-colors">
              About
            </a>
            <a href="#" className="text-ash-gray hover:text-moss-green transition-colors">
              Terms
            </a>
            <a href="#" className="text-ash-gray hover:text-moss-green transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-ash-gray hover:text-moss-green transition-colors p-2 hover:bg-background rounded-full"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-ash-gray hover:text-moss-green transition-colors p-2 hover:bg-background rounded-full"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-ash-gray text-sm">
          © 2025 ReWear. Building a sustainable fashion community, one swap at a time.
        </div>
      </div>
    </footer>
  );
};

export default Footerr;