import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedBikes from "@/components/FeaturedBikes";
import SummerSale from "@/components/SummerSale";
import NewArrivals from "@/components/NewArrivals";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FeaturedBikes />
      <SummerSale />
      <NewArrivals />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
