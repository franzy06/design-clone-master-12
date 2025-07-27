import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";

const NewArrivals = () => {
  const newBikes = [
    {
      id: 1,
      name: "Thunder Mountain X1",
      price: 2499.99,
      rating: 5.0,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 2,
      name: "Urban Speed Demon",
      price: 1899.99,
      rating: 4.9,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 3,
      name: "Trail Blazer Pro",
      price: 3299.99,
      rating: 4.8,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1544191696-15693136e0e4?w=400&h=300&fit=crop",
      isNew: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">New Arrivals</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            The latest additions to our premium collection - cutting-edge technology meets exceptional design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newBikes.map((bike, index) => (
            <Card key={bike.id} className="group hover:shadow-elegant transition-all duration-700 border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl hover:scale-[1.02] hover:-translate-y-6 hover:rotate-1">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Floating particles effect */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-8 group-hover:translate-y-8" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-1200 group-hover:-translate-x-6 group-hover:-translate-y-6" />
              </div>
              
              <CardContent className="p-0 relative z-10">
                <div className="relative overflow-hidden">
                  {/* Enhanced image with multiple overlay effects */}
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000 filter group-hover:brightness-110"
                  />
                  
                  {/* Dynamic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500" />
                  
                  {/* Premium "New" badge with enhanced styling */}
                  {bike.isNew && (
                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-success via-success/90 to-success/80 text-white px-4 py-2 text-sm font-bold shadow-2xl border-0 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                      <span className="relative z-10">New</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Badge>
                  )}
                  
                  {/* Enhanced action buttons with sophisticated styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon" className="bg-white/95 hover:bg-white backdrop-blur-xl shadow-2xl hover:scale-125 transition-all duration-300 border-0 rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-accent/30 shadow-xl hover:scale-125 transition-all duration-300 border-0 rounded-full relative overflow-hidden"
                      onClick={() => {
                        console.log(`Quick add ${bike.name} to cart`);
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <ShoppingCart className="h-4 w-4 relative z-10" />
                    </Button>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                  {/* Enhanced title with gradient text */}
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent">
                    {bike.name}
                  </h3>
                  
                  {/* Enhanced rating section */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 transition-all duration-200 ${i < Math.floor(bike.rating) ? 'text-warning fill-current group-hover:scale-110 drop-shadow-lg' : 'text-muted-foreground/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">({bike.reviews} reviews)</span>
                  </div>
                  
                  {/* Enhanced pricing and CTA section */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ${bike.price}
                    </span>
                    <Button 
                      className="group/btn bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-110 relative overflow-hidden border-0 text-white font-semibold"
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
                </div>
              </CardContent>
              
              {/* Card glow border effect */}
              <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold hover:shadow-elegant transition-all duration-300">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;