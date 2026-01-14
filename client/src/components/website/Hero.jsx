export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-spa-green-600 to-spa-green-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Luxury Ayurveda
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-spa-gold-300">
          Soothe, calm & relax the body, mind & soul
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Experience the ancient wisdom of Ayurveda combined with modern luxury. 
          Discover 450+ all-natural products and indulge in our signature spa rituals.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-spa-gold-500 hover:bg-spa-gold-600 px-8 py-3 rounded-full font-semibold transition-colors">
            Shop Now
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-colors border border-white/30">
            Book Spa
          </button>
        </div>
      </div>
    </section>
  );
}
