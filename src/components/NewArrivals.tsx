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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The latest additions to our premium collection - cutting-edge technology meets exceptional design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newBikes.map((bike) => (
            <Card key={bike.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {bike.isNew && (
                    <Badge className="absolute top-4 left-4 bg-success text-white">
                      New
                    </Badge>
                  )}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {bike.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(bike.rating) ? 'text-warning fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({bike.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${bike.price}</span>
                    <Button className="group/btn">
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;