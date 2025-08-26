import { Shield, CreditCard, Truck, RotateCcw } from "lucide-react";

const TrustBadges = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "256-bit SSL encryption"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Visa, MasterCard, PayPal"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Hassle-free returns"
    }
  ];

  const paymentLogos = [
    { name: "Visa", logo: "💳" },
    { name: "MasterCard", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Secure", logo: "🔒" }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Security */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Secure Payment Methods
          </h3>
          <div className="flex justify-center items-center space-x-6 mb-6">
            {paymentLogos.map((payment, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{payment.logo}</div>
                <span className="text-xs text-muted-foreground">{payment.name}</span>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-accent px-4 py-2 rounded-full">
            <Shield className="h-4 w-4 text-success" />
            <span>Protected by 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;