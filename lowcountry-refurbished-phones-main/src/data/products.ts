import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "iphone-13-128gb-blue",
    name: "iPhone 13",
    brand: "Apple",
    model: "iPhone 13",
    storage: "128GB",
    color: "Blue",
    condition: "Excellent",
    price: 549,
    originalPrice: 799,
    discount: 31,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    specs: {
      display: "6.1-inch Super Retina XDR",
      camera: "Dual 12MP system",
      battery: "Up to 19 hours video",
      processor: "A15 Bionic chip"
    },
    inStock: true,
    description: "Like-new iPhone 13 with minimal signs of use. Includes original charger and 30-day warranty."
  },
  {
    id: "iphone-12-64gb-black",
    name: "iPhone 12",
    brand: "Apple",
    model: "iPhone 12",
    storage: "64GB",
    color: "Black",
    condition: "Very Good",
    price: 449,
    originalPrice: 699,
    discount: 36,
    image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d9d?w=400&h=400&fit=crop",
    specs: {
      display: "6.1-inch Super Retina XDR",
      camera: "Dual 12MP system",
      battery: "Up to 17 hours video",
      processor: "A14 Bionic chip"
    },
    inStock: true,
    description: "Reliable iPhone 12 in great condition. Minor cosmetic wear, fully functional with warranty."
  },
  {
    id: "samsung-s21-128gb-phantom-gray",
    name: "Galaxy S21",
    brand: "Samsung",
    model: "Galaxy S21",
    storage: "128GB",
    color: "Phantom Gray",
    condition: "Excellent",
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    specs: {
      display: "6.2-inch Dynamic AMOLED",
      camera: "Triple 64MP system",
      battery: "4000mAh all-day battery",
      processor: "Snapdragon 888"
    },
    inStock: true,
    description: "Premium Samsung Galaxy S21 in excellent condition. Barely used with original accessories."
  },
  {
    id: "iphone-11-128gb-red",
    name: "iPhone 11",
    brand: "Apple",
    model: "iPhone 11",
    storage: "128GB",
    color: "Red",
    condition: "Good",
    price: 349,
    originalPrice: 599,
    discount: 42,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    specs: {
      display: "6.1-inch Liquid Retina HD",
      camera: "Dual 12MP system",
      battery: "Up to 17 hours video",
      processor: "A13 Bionic chip"
    },
    inStock: true,
    description: "Solid iPhone 11 with normal wear. Great performance and camera quality at an affordable price."
  },
  {
    id: "samsung-s20-128gb-cloud-blue",
    name: "Galaxy S20",
    brand: "Samsung",
    model: "Galaxy S20",
    storage: "128GB",
    color: "Cloud Blue",
    condition: "Very Good",
    price: 329,
    originalPrice: 699,
    discount: 53,
    image: "https://images.unsplash.com/photo-1583573535692-8faf2b5e5840?w=400&h=400&fit=crop",
    specs: {
      display: "6.2-inch Dynamic AMOLED",
      camera: "Triple 64MP system",
      battery: "4000mAh fast charging",
      processor: "Snapdragon 865"
    },
    inStock: true,
    description: "Feature-rich Galaxy S20 with 5G capability. Minor wear but excellent performance."
  },
  {
    id: "iphone-se-64gb-white",
    name: "iPhone SE (3rd gen)",
    brand: "Apple",
    model: "iPhone SE",
    storage: "64GB",
    color: "White",
    condition: "Excellent",
    price: 299,
    originalPrice: 429,
    discount: 30,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop",
    specs: {
      display: "4.7-inch Retina HD",
      camera: "Single 12MP system",
      battery: "Up to 15 hours video",
      processor: "A15 Bionic chip"
    },
    inStock: true,
    description: "Compact and powerful iPhone SE with the latest chip. Perfect for users who prefer smaller phones."
  }
];