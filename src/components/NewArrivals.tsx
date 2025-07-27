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
          {newBikes.map((bike) => (
            <Card key={bike.id} className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card overflow-hidden bg-gradient-to-b from-card to-card/50 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {bike.isNew && (
                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-success to-success/90 text-white px-3 py-1 text-sm font-bold shadow-lg">
                      New
                    </Badge>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon" className="bg-white/95 hover:bg-white backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="bg-gradient-to-r from-primary to-accent hover:shadow-glow shadow-lg hover:scale-110 transition-all duration-300"
                      onClick={() => {
                        console.log(`Quick add ${bike.name} to cart`);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {bike.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(bike.rating) ? 'text-warning fill-current' : 'text-muted-foreground/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({bike.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">${bike.price}</span>
                    <Button 
                      className="group/btn bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        console.log(`Added ${bike.name} to cart`);
                        // Add toast notification here if needed
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
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