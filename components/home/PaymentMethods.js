export function PaymentMethods() {
  const paymentMethods = [
    { method: 'Cashapp', fee: '5%', icon: '💳' },
    { method: 'Zelle', fee: '5%', icon: '💸' },
    { method: 'Crypto', fee: '4%', icon: '₿' },
    { method: 'Cash', fee: '0%', icon: '💵' }
  ]

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-500">Payments Accepted</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {paymentMethods.map((payment, index) => (
          <div
            key={index}
            className="bg-black/20 rounded-xl p-4 transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-2xl mb-2">{payment.icon}</div>
            <div className="font-medium text-sm md:text-base">{payment.method}</div>
            <div className="text-orange-400 text-sm md:text-base">{payment.fee}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 