'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductByHandle } from '@/lib/data/products';
import { formatMoney } from '@/lib/utils/format';
import { useCart } from '@/contexts/CartContext';
import Button from '@/components/ui/Button';
import { ProductVariant } from '@/types';

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;
  const product = getProductByHandle(handle);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.variants[0] || null
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      title: product.title,
      price: selectedVariant.price,
      quantity,
      image: product.images[0],
      variant: selectedVariant.title,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const hasDiscount = selectedVariant?.compareAtPrice && selectedVariant.compareAtPrice > selectedVariant.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.vendor}</p>

          {/* Price */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl font-bold">
              {formatMoney(selectedVariant?.price || product.price)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  {formatMoney(selectedVariant!.compareAtPrice!)}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                  SALE
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Variants */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Select Variant
              </label>
              <div className="grid grid-cols-2 gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`px-4 py-2 border rounded transition-colors ${
                      selectedVariant?.id === variant.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    } ${!variant.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {variant.title}
                    {!variant.available && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded hover:border-black"
              >
                -
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded hover:border-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.available || !product.available}
            className="w-full mb-4"
            size="lg"
          >
            {addedToCart
              ? 'Added to Cart!'
              : !product.available || !selectedVariant?.available
              ? 'Sold Out'
              : 'Add to Cart'}
          </Button>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
