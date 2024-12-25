export function ContactContent() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative w-full h-32 sm:h-48 md:h-64 mb-8">
        <img 
          src="/products/contact_us.png"
          alt="Contact WeUpLa"
          className="w-full h-full object-contain sm:object-cover"
        />
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-6">
          <p className="text-white text-base sm:text-lg mb-6">
            For the fastest response and secure communication, reach out to us on Signal or Telegram. 
            We're available 24/7 to assist you.
          </p>
          
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
            <a 
              href="signal://+1234567890"
              className="flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 
                bg-gradient-to-r from-blue-600 to-blue-500 
                hover:from-blue-500 hover:to-blue-400
                rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-8h2v6h-2V6z"/>
              </svg>
              <span className="text-base sm:text-lg font-medium">Contact on Signal</span>
            </a>

            <a 
              href="https://t.me/weupla"
              className="flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 
                bg-gradient-to-r from-blue-400 to-blue-300 
                hover:from-blue-300 hover:to-blue-200
                rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-8h2v6h-2V6z"/>
              </svg>
              <span className="text-base sm:text-lg font-medium">Contact on Telegram</span>
            </a>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <h2 className="text-lg sm:text-xl font-semibold text-orange-500">Available 24/7</h2>
          </div>
          <div className="space-y-2 text-white text-sm sm:text-base">
            <p className="flex items-center space-x-2">
              <span>• Average response time: 5 minutes</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>• Customer support in multiple languages</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>• Secure and private communication</span>
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-white text-center p-4">
          <p>All communications are end-to-end encrypted for your privacy and security.</p>
        </div>
      </div>
    </div>
  )
} 