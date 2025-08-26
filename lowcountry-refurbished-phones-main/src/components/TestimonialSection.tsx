import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    rating: 5,
    text: "Amazing service! Got a refurbished iPhone 13 that looks brand new. Fast shipping and great customer support.",
    location: "Charleston, SC"
  },
  {
    id: 2,
    name: "Mike Thompson",
    rating: 4,
    text: "Very satisfied with my Samsung Galaxy purchase. Good quality phone at an excellent price point!",
    location: "Savannah, GA"
  },
  {
    id: 3,
    name: "Jessica Chen",
    rating: 5,
    text: "Best place for refurbished phones, hands down. No hidden fees, exactly as described. Will definitely buy again.",
    location: "Beaufort, SC"
  },
  {
    id: 4,
    name: "David Rodriguez",
    rating: 4,
    text: "Great experience! Phone arrived quickly and works perfectly. The battery life is excellent for a refurbished device.",
    location: "Hilton Head, SC"
  },
  {
    id: 5,
    name: "Emily Watson",
    rating: 5,
    text: "Couldn't be happier! Saved hundreds compared to buying new, and the phone is in pristine condition.",
    location: "Bluffton, SC"
  },
  {
    id: 6,
    name: "Robert Kim",
    rating: 4,
    text: "Solid quality and fair pricing. The checkout process was smooth - no credit checks or complicated paperwork!",
    location: "Mount Pleasant, SC"
  }
];

const TestimonialSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-warning fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Lowcountry Resale Solutions
            for their refurbished phone needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-background px-6 py-3 rounded-full shadow-[var(--shadow-soft)]">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8/5</span>
            <span className="text-muted-foreground">from 2,847+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;