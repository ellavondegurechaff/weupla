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
                <path d="M12.7 2.7c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5l-.8 3.8c-.2.8.5 1.5 1.3 1.3l3.8-.8c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10s-4.5-10-10-10zm0 18c-1.6 0-3.1-.4-4.4-1.1l-.3-.2-3.1.6.6-3.1-.2-.3c-.7-1.3-1.1-2.8-1.1-4.4 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.04.01.18-.01.25z"/>
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