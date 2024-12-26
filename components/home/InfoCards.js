import React from 'react';
import { Truck, Clock, ExternalLink } from 'lucide-react';

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="group relative overflow-hidden">
        <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-orange-500/10">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-orange-500/10 rounded-xl transform transition-all duration-300 group-hover:scale-110">
              <Truck className="w-8 h-8 text-orange-400" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Shipping</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ExternalLink className="w-4 h-4 mr-2 text-orange-400" />
                  100% Insured
                </li>
                <li className="flex items-center text-gray-300">
                  <ExternalLink className="w-4 h-4 mr-2 text-orange-400" />
                  Available 24/7
                </li>
                <li className="flex items-center text-gray-300">
                  <ExternalLink className="w-4 h-4 mr-2 text-orange-400" />
                  Fast and discreet shipping methods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden">
        <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-orange-500/10">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-orange-500/10 rounded-xl transform transition-all duration-300 group-hover:scale-110">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Intown</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <ExternalLink className="w-4 h-4 mr-2 text-orange-400" />
                  Mon - Sun
                </li>
                <li className="flex items-center text-gray-300">
                  <ExternalLink className="w-4 h-4 mr-2 text-orange-400" />
                  1pm - 6pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}