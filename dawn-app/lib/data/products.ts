import { Product, Collection } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Classic Cotton T-Shirt',
    handle: 'classic-cotton-t-shirt',
    description: 'A comfortable and versatile cotton t-shirt perfect for everyday wear. Made from 100% organic cotton.',
    price: 2999,
    compareAtPrice: 3999,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Apparel',
    tags: ['clothing', 'shirts', 'sale'],
    available: true,
    variants: [
      {
        id: '1-1',
        title: 'Small / Black',
        price: 2999,
        compareAtPrice: 3999,
        available: true,
        options: { Size: 'Small', Color: 'Black' },
      },
      {
        id: '1-2',
        title: 'Medium / Black',
        price: 2999,
        compareAtPrice: 3999,
        available: true,
        options: { Size: 'Medium', Color: 'Black' },
      },
      {
        id: '1-3',
        title: 'Large / Black',
        price: 2999,
        available: true,
        options: { Size: 'Large', Color: 'Black' },
      },
    ],
  },
  {
    id: '2',
    title: 'Denim Jacket',
    handle: 'denim-jacket',
    description: 'Classic denim jacket with a modern fit. Features button closure and multiple pockets.',
    price: 8999,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Apparel',
    tags: ['clothing', 'jackets', 'denim'],
    available: true,
    variants: [
      {
        id: '2-1',
        title: 'Small / Blue',
        price: 8999,
        available: true,
        options: { Size: 'Small', Color: 'Blue' },
      },
      {
        id: '2-2',
        title: 'Medium / Blue',
        price: 8999,
        available: true,
        options: { Size: 'Medium', Color: 'Blue' },
      },
    ],
  },
  {
    id: '3',
    title: 'Leather Sneakers',
    handle: 'leather-sneakers',
    description: 'Premium leather sneakers with cushioned insole for all-day comfort.',
    price: 12999,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Footwear',
    tags: ['shoes', 'sneakers'],
    available: true,
    variants: [
      {
        id: '3-1',
        title: 'US 8 / White',
        price: 12999,
        available: true,
        options: { Size: 'US 8', Color: 'White' },
      },
      {
        id: '3-2',
        title: 'US 9 / White',
        price: 12999,
        available: true,
        options: { Size: 'US 9', Color: 'White' },
      },
      {
        id: '3-3',
        title: 'US 10 / White',
        price: 12999,
        available: false,
        options: { Size: 'US 10', Color: 'White' },
      },
    ],
  },
  {
    id: '4',
    title: 'Wool Beanie',
    handle: 'wool-beanie',
    description: 'Warm and cozy wool beanie perfect for cold weather.',
    price: 1999,
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Accessories',
    tags: ['accessories', 'hats', 'winter'],
    available: true,
    variants: [
      {
        id: '4-1',
        title: 'One Size / Gray',
        price: 1999,
        available: true,
        options: { Size: 'One Size', Color: 'Gray' },
      },
    ],
  },
  {
    id: '5',
    title: 'Canvas Backpack',
    handle: 'canvas-backpack',
    description: 'Durable canvas backpack with laptop compartment and multiple pockets.',
    price: 6999,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Accessories',
    tags: ['accessories', 'bags'],
    available: true,
    variants: [
      {
        id: '5-1',
        title: 'One Size / Khaki',
        price: 6999,
        available: true,
        options: { Size: 'One Size', Color: 'Khaki' },
      },
    ],
  },
  {
    id: '6',
    title: 'Slim Fit Jeans',
    handle: 'slim-fit-jeans',
    description: 'Modern slim fit jeans with stretch denim for comfort and style.',
    price: 7999,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Apparel',
    tags: ['clothing', 'jeans', 'pants'],
    available: true,
    variants: [
      {
        id: '6-1',
        title: '30x32 / Dark Blue',
        price: 7999,
        available: true,
        options: { Size: '30x32', Color: 'Dark Blue' },
      },
      {
        id: '6-2',
        title: '32x32 / Dark Blue',
        price: 7999,
        available: true,
        options: { Size: '32x32', Color: 'Dark Blue' },
      },
    ],
  },
  {
    id: '7',
    title: 'Sunglasses',
    handle: 'sunglasses',
    description: 'Classic aviator sunglasses with UV protection.',
    price: 4999,
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Accessories',
    tags: ['accessories', 'sunglasses'],
    available: true,
    variants: [
      {
        id: '7-1',
        title: 'One Size / Black',
        price: 4999,
        available: true,
        options: { Size: 'One Size', Color: 'Black' },
      },
    ],
  },
  {
    id: '8',
    title: 'Hoodie',
    handle: 'hoodie',
    description: 'Comfortable pullover hoodie with kangaroo pocket.',
    price: 5999,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
    ],
    vendor: 'Dawn Apparel',
    tags: ['clothing', 'hoodies'],
    available: true,
    variants: [
      {
        id: '8-1',
        title: 'Small / Gray',
        price: 5999,
        available: true,
        options: { Size: 'Small', Color: 'Gray' },
      },
      {
        id: '8-2',
        title: 'Medium / Gray',
        price: 5999,
        available: true,
        options: { Size: 'Medium', Color: 'Gray' },
      },
      {
        id: '8-3',
        title: 'Large / Gray',
        price: 5999,
        available: true,
        options: { Size: 'Large', Color: 'Gray' },
      },
    ],
  },
];

export const collections: Collection[] = [
  {
    id: 'all',
    title: 'All Products',
    handle: 'all',
    description: 'Browse our complete collection of products.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    products: products,
  },
  {
    id: 'clothing',
    title: 'Clothing',
    handle: 'clothing',
    description: 'Discover our latest clothing collection.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&h=600&fit=crop',
    products: products.filter((p) => p.tags.includes('clothing')),
  },
  {
    id: 'accessories',
    title: 'Accessories',
    handle: 'accessories',
    description: 'Complete your look with our accessories.',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1200&h=600&fit=crop',
    products: products.filter((p) => p.tags.includes('accessories')),
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}
