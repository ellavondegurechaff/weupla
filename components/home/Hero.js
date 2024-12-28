import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[300px] flex items-center justify-center p-4 md:p-2">
      <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-6 border border-orange-500/20">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group cursor-pointer">
            <img 
              src="/products/logo.png"
              alt="WeUpLa Logo"
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-300 tracking-tight antialiased">
              Menu Updated Daily. Over 100+ Flavors
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Best Prices Guaranteed. All Touchdowns are Insured with fast and discreet shipping methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}