import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

export function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-x-0 top-24 flex items-center justify-center z-[200] pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg 
              shadow-lg border border-gray-700/50 flex items-center space-x-2 min-w-[200px]"
          >
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-sm">{message}</span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 