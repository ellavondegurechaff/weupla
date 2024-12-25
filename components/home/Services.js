export function Services() {
  const services = [
    { name: 'TP🌡️ Service Available', icon: '✅' },
    { name: 'Bread Routing Available', icon: '✅' },
    { name: 'For Bulk Players', icon: '💪' }
  ]

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/20 rounded-xl p-6 transform transition-all duration-300 
              hover:scale-105 hover:bg-black/30"
          >
            <div className="text-2xl mb-3">{service.icon}</div>
            <div className="font-medium">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 