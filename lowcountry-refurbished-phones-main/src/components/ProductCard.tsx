import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return "bg-success text-success-foreground";
      case "Very Good":
        return "bg-primary text-primary-foreground";
      case "Good":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-medium)] transition-all duration-200 h-full">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge className={getConditionColor(product.condition)}>
            {product.condition}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="destructive">
            -{product.discount}%
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 flex-1">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-warning fill-current" />
              <span className="text-xs text-muted-foreground">4.8</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {product.storage} • {product.color}
          </p>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-foreground">
                ${product.price}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;