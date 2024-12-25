export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent animate-pulse rounded-xl"></div>
      
      <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-3 md:p-4 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="mb-2 md:mb-4 flex justify-center">
            <img 
              src="/products/logo.png"
              alt="WeUpLa Logo"
              className="h-12 md:h-20 w-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-2xl font-medium text-orange-300 mb-1 md:mb-2">
            Menu Updated Daily. Over 100+ Flavors
          </p>
          <p className="text-xs md:text-base text-gray-300">
            Best Prices Guaranteed. All Touchdowns are Insured with fast and discreet shipping methods.
          </p>
        </div>
      </div>
    </div>
  )
} 