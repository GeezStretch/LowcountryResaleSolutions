export interface Product {
  id: string;
  name: string;
  brand: "Apple" | "Samsung";
  model: string;
  storage: string;
  color: string;
  condition: "Excellent" | "Very Good" | "Good";
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  specs: {
    display: string;
    camera: string;
    battery: string;
    processor: string;
  };
  inStock: boolean;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}