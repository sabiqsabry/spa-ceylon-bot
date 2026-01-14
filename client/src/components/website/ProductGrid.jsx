import { products } from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 px-4 bg-spa-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-spa-green-700">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
