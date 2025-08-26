import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-phones.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-accent py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                The market's most{" "}
                <span className="text-primary">affordable</span> refurbished phone distributor
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Premium refurbished iPhones and Samsung devices at unbeatable prices. 
                All phones thoroughly tested and certified for quality.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>30-day warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-success" />
                <span>Quality guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Free shipping</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/faq">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Additional messaging */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground font-medium">
                🔒 No Social Security numbers required, no credit checks — simple affordable purchases
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)]">
              <img
                src={heroImage}
                alt="Premium refurbished smartphones collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Up to 70% off retail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;