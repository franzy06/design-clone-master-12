import { Truck, Shield, Wrench, Headphones, Award, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $500"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "2-year comprehensive warranty"
    },
    {
      icon: Wrench,
      title: "Expert Service", 
      description: "Professional maintenance & repair"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Certified premium bike brands"
    },
    {
      icon: MapPin,
      title: "Store Locations",
      description: "Multiple showrooms nationwide"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;