import React from 'react';
import { Truck, Clock, ExternalLink } from 'lucide-react';

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="group relative overflow-hidden h-full">
        <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-6 h-full border border-orange-500/10">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Shipping</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>100% Insured</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Available 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Fast and discreet shipping methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden h-full">
        <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-6 h-full border border-orange-500/10">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Intown</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Mon - Sun</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>1pm - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}