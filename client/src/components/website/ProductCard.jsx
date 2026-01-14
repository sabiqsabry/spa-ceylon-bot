export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square bg-spa-cream overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-spa-green-600 font-semibold mb-1">{product.range}</p>
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-spa-green-600">Rs. {product.price.toLocaleString()}</span>
          <button className="bg-spa-green-500 hover:bg-spa-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
