export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  vendor: string;
  tags: string[];
  variants: ProductVariant[];
  available: boolean;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  options: { [key: string]: string };
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: string;
  products: Product[];
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  variant: string;
}

export interface BlogPost {
  id: string;
  title: string;
  handle: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}
