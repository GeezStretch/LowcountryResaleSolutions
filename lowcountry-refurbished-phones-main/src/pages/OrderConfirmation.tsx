import { CheckCircle, Package, Truck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderNumber = "LRS-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Order Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
        </p>

        {/* Order Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Order Number</span>
              <span className="font-mono text-primary">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Estimated Delivery</span>
              <span>{estimatedDelivery}</span>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Processing</h3>
            <p className="text-sm text-muted-foreground">
              Your order is being prepared for shipment
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Shipping</h3>
            <p className="text-sm text-muted-foreground">
              Free shipping with tracking information
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Updates</h3>
            <p className="text-sm text-muted-foreground">
              Email notifications at every step
            </p>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-foreground mb-3">Important Information:</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• A confirmation email has been sent to your email address</li>
            <li>• You'll receive tracking information once your order ships</li>
            <li>• All phones come with a 30-day warranty</li>
            <li>• Customer support: (843) 555-0123</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;