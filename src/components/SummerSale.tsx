import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import summerSaleBg from "@/assets/summer-sale-bg.jpg";

const SummerSale = () => {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${summerSaleBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-accent mb-6">
            <Clock className="h-6 w-6" />
            <span className="text-base font-bold uppercase tracking-widest">Limited Time Offer</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            Summer Sale
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Up to 40% Off</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-3xl">
            Get ready for summer adventures with unbeatable deals on our premium bike collection. 
            Limited stock available - don't miss out on these incredible savings!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white group px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-500">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium hover:border-white/40 transition-all duration-300">
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