import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";

const FeaturedBikes = () => {
  const bikes = [
    {
      id: 1,
      name: "Mountain Explorer Pro",
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1544191696-15693136e0e4?w=400&h=300&fit=crop",
      badge: "Best Seller",
      badgeVariant: "default"
    },
    {
      id: 2,
      name: "City Cruiser Elite",
      price: 899.99,
      originalPrice: 1099.99,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop",
      badge: "Sale",
      badgeVariant: "destructive"
    },
    {
      id: 3,
      name: "Road Racer Carbon",
      price: 2199.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      badge: "Premium",
      badgeVariant: "secondary"
    },
    {
      id: 4,
      name: "Electric Commuter",
      price: 1799.99,
      originalPrice: 1999.99,
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      badge: "New",
      badgeVariant: "outline"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
              Featured Bikes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium bicycles designed for every adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike) => (
            <Card key={bike.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge 
                    variant={bike.badgeVariant as any}
                    className="absolute top-4 left-4 z-20 shadow-lg backdrop-blur-sm font-semibold"
                  >
                    {bike.badge}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white hover:text-destructive backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {bike.name}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 transition-colors duration-200 ${
                            i < Math.floor(bike.rating) 
                              ? 'text-yellow-400 fill-current drop-shadow-sm' 
                              : 'text-muted-foreground/40'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">({bike.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="text-3xl font-bold text-foreground">${bike.price}</span>
                    {bike.originalPrice && (
                      <div className="flex flex-col">
                        <span className="text-lg text-muted-foreground line-through">${bike.originalPrice}</span>
                        <span className="text-xs text-success font-semibold">
                          Save ${(bike.originalPrice - bike.price).toFixed(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full mt-6 group/btn bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 font-semibold hover:scale-105"
                    onClick={() => {
                      console.log(`Added ${bike.name} to cart`);
                      // Add toast notification here if needed
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Bikes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;