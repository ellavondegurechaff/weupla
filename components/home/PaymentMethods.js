import React from 'react';

export function PaymentMethods() {
  const paymentMethods = [
    { method: 'Cashapp', fee: '5%', icon: '💳', bgColor: 'from-green-500/20 to-green-700/20' },
    { method: 'Zelle', fee: '5%', icon: '💸', bgColor: 'from-purple-500/20 to-purple-700/20' },
    { method: 'Crypto', fee: '4%', icon: '₿', bgColor: 'from-orange-500/20 to-orange-700/20' },
    { method: 'Cash', fee: '0%', icon: '💵', bgColor: 'from-blue-500/20 to-blue-700/20' }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl p-4 md:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" />
      
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">
          Payments Accepted
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {paymentMethods.map((payment, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${payment.bgColor} opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
              
              <div className="relative p-4 md:p-6 bg-black/20 h-full flex flex-col items-center justify-center space-y-3 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {payment.icon}
                </div>
                <div className="font-semibold text-base md:text-lg text-white">
                  {payment.method}
                </div>
                <div className="text-orange-400 text-sm md:text-base font-medium">
                  {payment.fee}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}