import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-2xl font-bold text-white tracking-tight">
              Bike<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Zone</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                Mountain Bikes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                Road Bikes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                Electric Bikes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                Accessories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-accent to-accent/80 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg">2</span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;