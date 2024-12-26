import React from 'react';
import { Check, Package, Users } from 'lucide-react';

export function Services() {
  const services = [
    { 
      name: 'TP🌡️ Service Available',
      icon: <Check className="w-6 h-6 text-green-400" />,
      bgColor: 'from-green-500/10 to-green-700/10'
    },
    { 
      name: 'Bread Routing Available',
      icon: <Package className="w-6 h-6 text-orange-400" />,
      bgColor: 'from-orange-500/10 to-orange-700/10'
    },
    { 
      name: 'For Bulk Players',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      bgColor: 'from-blue-500/10 to-blue-700/10'
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl p-4 md:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" />
      
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
              
              <div className="relative p-6 bg-black/20 h-full flex flex-col items-center justify-center space-y-4 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-black/30 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="font-medium text-base md:text-lg text-center text-white">
                  {service.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}