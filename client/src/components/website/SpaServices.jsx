export default function SpaServices() {
  const featuredServices = [
    {
      name: 'Royal Body Ritual',
      duration: '120 min',
      price: 'Rs. 19,700',
      description: 'Herbal foot bath, tranquillity forehead massage, and extended full body massage',
    },
    {
      name: 'Shirodhara Stress Relief',
      duration: '90 min',
      price: 'Rs. 15,100',
      description: 'Centuries-old therapy where warm oil is gently poured onto your third eye',
    },
    {
      name: 'Ultra Glow Facial',
      duration: '120 min',
      price: 'Rs. 17,900',
      description: '8-step ritual with Floral Micro-Peeling for radiant, glowing skin',
    },
  ];

  return (
    <section id="spa" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-4 text-spa-green-700">
          Signature Spa Rituals
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the ultimate in luxury wellness with our signature treatments, 
          inspired by 5,000 years of Ayurvedic wisdom
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-spa-cream rounded-lg p-6 border border-spa-green-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-spa-green-700 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                  <p className="text-lg font-bold text-spa-green-600">{service.price}</p>
                </div>
                <button className="bg-spa-green-500 hover:bg-spa-green-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-spa-gold-500 hover:bg-spa-gold-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Spa Services
          </button>
        </div>
      </div>
    </section>
  );
}
