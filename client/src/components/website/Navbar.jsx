import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-spa-green-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold">Spa Ceylon</h1>
            <span className="ml-2 text-sm text-spa-gold-300">Luxury Ayurveda</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="hover:text-spa-gold-300 transition-colors">Products</a>
            <a href="#spa" className="hover:text-spa-gold-300 transition-colors">Spa Services</a>
            <a href="#about" className="hover:text-spa-gold-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-spa-gold-300 transition-colors">Contact</a>
            <button className="flex items-center gap-2 bg-spa-gold-500 hover:bg-spa-gold-600 px-4 py-2 rounded-full transition-colors">
              <ShoppingBag size={18} />
              <span>Cart</span>
            </button>
          </div>

          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
