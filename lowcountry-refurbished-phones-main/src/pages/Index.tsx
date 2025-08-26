import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustBadges from "@/components/TrustBadges";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { getCartItemCount } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemCount={getCartItemCount()} />
      <HeroSection />
      <TrustBadges />
      <TestimonialSection />
    </div>
  );
};

export default Index;
