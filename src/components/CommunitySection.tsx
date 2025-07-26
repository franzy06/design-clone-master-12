import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fellow cycling enthusiasts, get exclusive deals, and stay updated 
            with the latest biking trends and adventures.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Enter your email address" 
                  className="pl-10 py-3 text-base"
                />
              </div>
              <Button className="px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Get exclusive offers and cycling tips delivered to your inbox
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25k+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1.2M</div>
              <div className="text-gray-600">Social Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Cycling Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;