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
      badgeColor: "bg-accent"
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
      badgeColor: "bg-destructive"
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
      badgeColor: "bg-warning"
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
      badgeColor: "bg-success"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Bikes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium bicycles designed for every rider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike) => (
            <Card key={bike.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${bike.badgeColor} text-white`}>
                    {bike.badge}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-600 hover:text-destructive"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {bike.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(bike.rating) ? 'text-warning fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({bike.reviews})</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">${bike.price}</span>
                    {bike.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${bike.originalPrice}</span>
                    )}
                  </div>
                  
                  <Button className="w-full group/btn">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Bikes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;