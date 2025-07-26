import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-white">BikeZone</div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Mountain Bikes</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Road Bikes</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Electric Bikes</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Accessories</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;