export function Services() {
  const services = [
    { name: 'TP🌡️ Service Available', icon: '✅' },
    { name: 'Bread Routing Available', icon: '✅' },
    { name: 'For Bulk Players', icon: '💪' }
  ]

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-500">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/20 rounded-xl p-4 md:p-6 transform transition-all duration-300 
              hover:scale-105 hover:bg-black/30"
          >
            <div className="text-2xl mb-3">{service.icon}</div>
            <div className="font-medium text-sm md:text-base">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 