export function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-4 h-full overflow-y-auto">
      <div className="relative w-full h-32 md:h-64 mb-6 md:mb-8">
        <img 
          src="/products/about_us.png"
          alt="About WeUpLa"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-white text-base md:text-lg mb-6 md:mb-8">
          WeUpLa is your premier destination for quality products...
        </p>
        
        <div className="mt-4 md:mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <div className="bg-black/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-2 md:mb-3">Our Mission</h3>
            <p className="text-white text-sm md:text-base">
              To deliver premium quality products with exceptional service, ensuring 
              customer satisfaction in every transaction.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-2 md:mb-3">Our Values</h3>
            <p className="text-white text-sm md:text-base">
              Quality, Integrity, and Customer Focus drive everything we do at WeUpLa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 