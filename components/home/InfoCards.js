import { Truck, Clock } from 'lucide-react'

export function InfoCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Shipping Card */}
      <div className="group bg-black/30 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-orange-500/10 rounded-xl">
            <Truck size={24} className="text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold">Shipping</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">100% Insured</p>
          <p className="text-gray-300">Available 24/7</p>
          <p className="text-gray-300">Fast and discreet shipping methods</p>
        </div>
      </div>

      {/* Hours Card */}
      <div className="group bg-black/30 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-orange-500/10 rounded-xl">
            <Clock size={24} className="text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold">Intown</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">Mon - Sun</p>
          <p className="text-gray-300">1pm - 6pm</p>
        </div>
      </div>
    </div>
  )
} 