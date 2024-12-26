import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function useAddToHomeScreen() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    setIsIOS(isIOSDevice)

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false)
    }
  }, [])

  const triggerPrompt = () => {
    if (!localStorage.getItem('pwaPromptDismissed')) {
      setShowPrompt(true)
    }
  }

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setShowPrompt(false)
      }
      setDeferredPrompt(null)
    }
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
    localStorage.setItem('pwaPromptDismissed', 'true')
  }

  return {
    showPrompt,
    isIOS,
    triggerPrompt,
    handleInstallClick,
    dismissPrompt
  }
}

export function AddToHomeScreenPrompt({ showPrompt, isIOS, handleInstallClick, dismissPrompt }) {
  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black/80 backdrop-blur-lg rounded-xl p-4 shadow-lg z-[200] border border-white/10">
      <button 
        onClick={dismissPrompt}
        className="absolute right-2 top-2 p-1 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>

      <div className="flex items-center space-x-4">
        <img 
          src="/products/logo.png"
          alt="WeUpLA Logo"
          className="w-12 h-12 rounded-xl"
        />
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1">Add WeUpLA to Home Screen</h3>
          {isIOS ? (
            <p className="text-sm text-gray-300">
              Tap the share button <span className="inline-block">⎋</span> and choose 'Add to Home Screen'
            </p>
          ) : (
            <button
              onClick={handleInstallClick}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
            >
              Install App
            </button>
          )}
        </div>
      </div>
    </div>
  )
}