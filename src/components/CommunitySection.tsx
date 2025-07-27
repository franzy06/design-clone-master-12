import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shadow-elegant">
              <Users className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Join Our Community</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Connect with fellow cycling enthusiasts, get exclusive deals, and stay updated 
            with the latest biking trends and adventures.
          </p>
          
          <div className="max-w-lg mx-auto mb-12">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Enter your email address" 
                  className="pl-12 py-4 text-base border-border/50 focus:border-primary shadow-card hover:shadow-elegant transition-all duration-300"
                />
              </div>
              <Button className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Get exclusive offers and cycling tips delivered to your inbox
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 w-12 h-12">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 w-12 h-12">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 w-12 h-12">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">25k+</div>
              <div className="text-muted-foreground text-lg font-medium">Community Members</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1.2M</div>
              <div className="text-muted-foreground text-lg font-medium">Social Followers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-muted-foreground text-lg font-medium">Cycling Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;