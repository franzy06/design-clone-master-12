import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import summerSaleBg from "@/assets/summer-sale-bg.jpg";

const SummerSale = () => {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${summerSaleBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Limited Time Offer</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Summer Sale
            <span className="block text-accent">Up to 40% Off</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get ready for summer adventures with unbeatable deals on our premium bike collection. 
            Limited stock available - don't miss out on these incredible savings!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Deals
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">72</div>
              <div className="text-sm">Hours Left</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">15</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">42</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSale;