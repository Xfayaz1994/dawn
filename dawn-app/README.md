# Dawn E-commerce Application

A modern e-commerce web application converted from Shopify's Dawn theme, built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Product Catalog**: Browse products with beautiful card layouts
- 🔍 **Search Functionality**: Search products by title, description, or tags
- 🛒 **Shopping Cart**: Add, remove, and update product quantities
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎨 **Modern UI**: Clean, minimalist design inspired by Dawn theme
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🔄 **State Management**: React Context for cart management
- 💾 **Local Storage**: Cart persists across sessions

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Images**: Next.js Image Optimization
- **Fonts**: Google Fonts (Inter)

## Project Structure

```
dawn-app/
├── app/                      # Next.js app directory
│   ├── cart/                # Cart page
│   ├── collections/[handle] # Collection pages
│   ├── contact/             # Contact page
│   ├── products/[handle]    # Product detail pages
│   ├── search/              # Search page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── cart/               # Cart components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── product/            # Product components
│   └── ui/                 # UI components (Button, etc.)
├── contexts/               # React contexts
│   └── CartContext.tsx     # Cart state management
├── lib/                    # Utilities and data
│   ├── data/              # Mock data
│   └── utils/             # Utility functions
└── types/                 # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd dawn-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Home** (`/`): Hero section with featured products
- **Collections** (`/collections/[handle]`): Product listings by collection
  - `/collections/all` - All products
  - `/collections/clothing` - Clothing items
  - `/collections/accessories` - Accessories
- **Product Detail** (`/products/[handle]`): Individual product pages with variants
- **Cart** (`/cart`): Shopping cart with checkout summary
- **Search** (`/search`): Product search functionality
- **Contact** (`/contact`): Contact form
- **404** - Custom not found page

## Features in Detail

### Shopping Cart
- Add products with variant selection
- Update quantities
- Remove items
- Persistent storage using localStorage
- Real-time cart count in header

### Product Management
- Multiple product variants (size, color)
- Product images with gallery
- Sale pricing with compare-at prices
- Stock availability tracking
- Product tags and categories

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interactions

## Customization

### Adding Products
Edit `lib/data/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  title: 'Product Name',
  handle: 'product-slug',
  description: 'Product description',
  price: 2999, // Price in cents
  images: ['image-url'],
  vendor: 'Brand Name',
  tags: ['tag1', 'tag2'],
  available: true,
  variants: [...]
}
```

### Styling
- Modify Tailwind configuration in `tailwind.config.ts`
- Update global styles in `app/globals.css`
- Customize component styles in individual component files

### Colors and Branding
- Update the logo in `components/layout/Header.tsx`
- Modify color scheme in Tailwind classes
- Change fonts in `app/layout.tsx`

## Mock Data

The application uses mock data for demonstration purposes. In a production environment, you would:

1. Connect to a real e-commerce backend (Shopify, WooCommerce, custom API)
2. Implement real payment processing
3. Add user authentication
4. Integrate with inventory management
5. Set up order processing

## Performance

- Server-side rendering for SEO
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Static page generation where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is based on Shopify's Dawn theme and is provided as-is for educational purposes.

## Acknowledgments

- Original design inspired by [Shopify Dawn Theme](https://github.com/Shopify/dawn)
- Images from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org)
