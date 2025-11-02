'use client';

import React, { useState } from 'react';
import { products } from '@/lib/data/products';
import ProductGrid from '@/components/product/ProductGrid';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(products);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setSearchResults(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-12">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      {searchResults.length > 0 ? (
        <>
          <p className="text-gray-600 mb-6">
            {query ? `Found ${searchResults.length} results for "${query}"` : 'All Products'}
          </p>
          <ProductGrid products={searchResults} />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No products found for &quot;{query}&quot;. Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
