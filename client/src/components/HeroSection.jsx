import { Button } from "@/components/ui/button";
import { Recycle, Search, Upload, Sparkles, Heart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background eco-texture py-20 px-6 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-secondary/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-moss-green/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-primary/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Sustainable Fashion Revolution</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-moss-green via-primary to-accent bg-clip-text text-transparent">
            ReWear
          </span>{" "}<div className="text-3xl md:text-6xl block md:inline">– Community Clothing Exchange</div>
        </h1>
        
        <p className="text-xl text-ash-gray mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Give unused clothes a new life through swapping or point-based redemption. 
          Join our sustainable fashion community today.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12 animate-fade-in">
          <div className="flex items-center gap-2 text-moss-green">
            <Users className="h-5 w-5" />
            <span className="font-semibold">5,000+ Members</span>
          </div>
          <div className="flex items-center gap-2 text-moss-green">
            <Recycle className="h-5 w-5" />
            <span className="font-semibold">10,000+ Items Swapped</span>
          </div>
          <div className="flex items-center gap-2 text-moss-green">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">98% Satisfaction</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium group animate-fade-in hover:-translate-y-1 w-[190px]"
          >
            <Recycle className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
            Start Swapping
          </Button>
          
          <Button 
            size="lg"
            className="bg-moss-green hover:bg-moss-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium group animate-fade-in hover:-translate-y-1 w-[190px]"
          >
            <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Browse Items
          </Button>
          
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium group animate-fade-in hover:-translate-y-1 w-[190px]"
          >
            <Upload className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
            List an Item
          </Button>
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60 animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-moss-green/20 to-moss-green/5 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-moss-green/30 rounded-full"></div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-accent/30 rounded-full"></div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-secondary/30 rounded-full"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;