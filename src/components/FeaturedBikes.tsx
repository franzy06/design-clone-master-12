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
          {bikes.map((bike, index) => (
            <Card key={bike.id} className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(11,59,95,0.4)] transition-all duration-700 hover:-translate-y-4 hover:rotate-1">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Floating orbs for visual interest */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-125" />
              
              <CardContent className="p-0 relative z-10">
                <div className="relative overflow-hidden rounded-t-lg">
                  {/* Enhanced image container with multiple overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
                  
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-1000 filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  
                  {/* Enhanced badge with glow effect */}
                  <Badge 
                    variant={bike.badgeVariant as any}
                    className="absolute top-4 left-4 z-30 shadow-2xl backdrop-blur-sm font-semibold px-3 py-1 bg-gradient-to-r from-accent/90 to-accent border-0 text-white group-hover:scale-110 transition-all duration-300"
                  >
                    {bike.badge}
                  </Badge>
                  
                  {/* Enhanced heart button with better styling */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 z-30 bg-white/10 hover:bg-accent/20 text-white hover:text-white backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-125 rounded-full"
                  >
                    <Heart className="h-4 w-4 group-hover:fill-current transition-all duration-300" />
                  </Button>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-25">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </div>
                
                <div className="p-6 space-y-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                  {/* Enhanced typography with gradient text */}
                  <h3 className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3 group-hover:from-primary group-hover:to-accent transition-all duration-500 leading-tight">
                    {bike.name}
                  </h3>
                  
                  {/* Enhanced rating with better visual hierarchy */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 transition-all duration-200 ${
                            i < Math.floor(bike.rating) 
                              ? 'text-yellow-400 fill-current drop-shadow-lg group-hover:scale-110' 
                              : 'text-muted-foreground/40'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium bg-white/5 px-2 py-1 rounded-full">
                      ({bike.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Enhanced pricing with better visual impact */}
                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ${bike.price}
                    </span>
                    {bike.originalPrice && (
                      <div className="flex flex-col">
                        <span className="text-lg text-muted-foreground line-through opacity-70">
                          ${bike.originalPrice}
                        </span>
                        <span className="text-xs text-success font-semibold bg-success/10 px-2 py-1 rounded-full">
                          Save ${(bike.originalPrice - bike.price).toFixed(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced CTA button with sophisticated styling */}
                  <Button 
                    className="w-full mt-6 group/btn relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-accent hover:via-accent hover:to-primary shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-500 font-semibold py-3 border-0 text-white hover:scale-[1.02] transform"
                    onClick={() => {
                      console.log(`Added ${bike.name} to cart`);
                    }}
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Add to Cart</span>
                  </Button>
                </div>
              </CardContent>
              
              {/* Card border glow effect */}
              <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
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