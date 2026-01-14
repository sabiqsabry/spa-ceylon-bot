import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-spa-green-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Spa Ceylon</h3>
            <p className="text-spa-gold-300 mb-4">
              World's Largest Luxury Ayurveda Chain
            </p>
            <p className="text-sm text-gray-300">
              106+ locations across 26 countries
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(+94) 77 659 5757</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>online@spaceylon.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>18 locations in Sri Lanka</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Hours</h4>
            <p className="text-sm text-gray-300 mb-4">Daily 10am - 11pm</p>
            <div className="flex gap-4">
              <a href="#" className="text-spa-gold-300 hover:text-spa-gold-200">Instagram</a>
              <a href="#" className="text-spa-gold-300 hover:text-spa-gold-200">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-spa-green-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2026 Spa Ceylon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
