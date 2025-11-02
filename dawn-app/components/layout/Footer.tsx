import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              Dawn is a modern e-commerce store offering quality products with exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-gray-600 hover:text-black text-sm">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="text-gray-600 hover:text-black text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/clothing" className="text-gray-600 hover:text-black text-sm">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="text-gray-600 hover:text-black text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Dawn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
