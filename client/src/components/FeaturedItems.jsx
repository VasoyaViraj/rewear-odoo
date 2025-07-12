import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Star } from "lucide-react";

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&h=400&fit=crop",
      available: true,
      likes: 24,
      views: 156,
      rating: 4.8
    },
    {
      id: 2,
      title: "Cozy Knit Sweater",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop",
      available: true,
      likes: 18,
      views: 92,
      rating: 4.9
    },
    {
      id: 3,
      title: "Designer Handbag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      available: true,
      likes: 31,
      views: 203,
      rating: 4.7
    },
    {
      id: 4,
      title: "Summer Dress",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop",
      available: true,
      likes: 27,
      views: 134,
      rating: 4.8
    }
  ];

  return (
    <section className="py-16 px-6 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-4 animate-fade-in">
            Featured Items
          </h2>
          <p className="text-ash-gray max-w-2xl mx-auto animate-fade-in">
            Discover amazing pieces from our community members
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 group cursor-pointer animate-fade-in bg-gradient-to-b from-background to-background/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay stats */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs">
                    <Eye className="h-3 w-3 text-ash-gray" />
                    <span className="font-medium text-charcoal">{item.views}</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Heart className="h-3 w-3 text-accent" />
                    <span className="text-xs font-medium text-charcoal">{item.likes}</span>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 text-primary fill-current" />
                    <span className="text-xs font-medium text-charcoal">{item.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-charcoal mb-3 group-hover:text-moss-green transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  {item.available && (
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                      Available
                    </Badge>
                  )}
                  
                  <div className="flex items-center gap-1 text-xs text-ash-gray">
                    <Heart className="h-3 w-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="bg-moss-green hover:bg-moss-green/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;