import { notFound } from 'next/navigation';
import { getCollectionByHandle } from '@/lib/data/products';
import ProductGrid from '@/components/product/ProductGrid';
import Image from 'next/image';

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  return (
    <div>
      {/* Collection Banner */}
      <section className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {collection.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {collection.products.length > 0 ? (
          <ProductGrid products={collection.products} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this collection.</p>
          </div>
        )}
      </section>
    </div>
  );
}
