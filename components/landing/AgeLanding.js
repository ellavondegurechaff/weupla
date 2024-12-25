import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, AlertTriangle, ArrowRight } from 'lucide-react'
import { IntroFade } from './Introfade'

export function AgeLanding({ onVerified }) {
  const [showIntro, setShowIntro] = useState(true)
  const [step, setStep] = useState('initial') // initial, verify, password
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isUnder21, setIsUnder21] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user was previously verified
    const verified = localStorage.getItem('ageVerified')
    if (verified === 'true') {
      setShowIntro(false) // Skip intro for verified users
      onVerified(true)
    }
  }, [onVerified])

  const handleVerification = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      if (password === 'weupla2024') {
        onVerified(true)
        localStorage.setItem('ageVerified', 'true')
      } else {
        setError('Invalid password')
        setTimeout(() => setError(''), 3000)
      }
    } catch (error) {
      setError('Verification failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUnder21 = () => {
    setIsUnder21(true)
    setTimeout(() => {
      window.location.href = 'https://www.google.com'
    }, 2000)
  }

  if (showIntro) {
    return <IntroFade onComplete={() => setShowIntro(false)} />
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-orange-800 via-orange-600 to-orange-700 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105"
          style={{ 
            backgroundImage: "url('/products/loading-bg.jpg')",
            animation: 'slow-pan 30s ease-in-out infinite alternate'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
          >
            <img 
              src="/products/logo.png"
              alt="WeUpLa Logo"
              className="h-24 md:h-32 mx-auto mb-6 md:mb-8 animate-float"
            />
          </motion.div>

          {/* Age Verification Content */}
          <div className="space-y-6">
            <div className="text-center">
              <Lock className="w-8 h-8 mx-auto mb-4 text-orange-400" />
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Age Verification Required
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                You must be 21 or older to access this website.
                Please verify your age to continue.
              </p>
            </div>

            {/* Age Verification Steps */}
            <AnimatePresence mode="wait">
              {step === 'initial' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <button
                    onClick={() => setStep('verify')}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl 
                      transition-all transform hover:scale-102 flex items-center justify-center group"
                  >
                    <span>Yes, I am 21 or older</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={handleUnder21}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl 
                      transition-all flex items-center justify-center"
                  >
                    <span>No, I am under 21</span>
                  </button>
                </motion.div>
              )}

              {step === 'verify' && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleVerification}
                  className="space-y-4"
                >
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter verification password"
                      className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                      disabled={isLoading}
                    />
                    <Lock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl
                      transition-all transform hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed
                      flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Verifying...</span>
                      </div>
                    ) : (
                      <span>Verify Age</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('initial')}
                    className="w-full text-sm text-gray-400 hover:text-white transition-colors mb-3"
                  >
                    Go back
                  </button>

                  <a
                    href="signal://+1234567890"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 
                      bg-[#3A76F0] hover:bg-[#2856C9]
                      rounded-xl transition-all duration-300 transform hover:scale-102 text-sm"
                  >
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 256 256" 
                      fill="currentColor"
                    >
                      <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,219.75a16,16,0,0,0,11.42,19.52,16.2,16.2,0,0,0,4.05.52,16,16,0,0,0,15.47-11.94l11.35-42.87A104,104,0,1,0,128,24ZM128,216a88,88,0,0,1-88-88c0-48.35,39.65-88,88-88s88,39.65,88,88C216,176.35,176.35,216,128,216Z"/>
                    </svg>
                    <span>Verify on Signal for password</span>
                  </a>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center space-x-2 text-red-400"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Under 21 Redirect Message */}
            <AnimatePresence>
              {isUnder21 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-red-400 space-y-2"
                >
                  <AlertTriangle className="w-6 h-6 mx-auto" />
                  <p>You must be 21 or older to access this site.</p>
                  <p className="text-sm">Redirecting you away...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 