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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-elegant group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-9 h-9 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;