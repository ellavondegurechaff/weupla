import { motion } from 'framer-motion'

export function IntroFade({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ 
        duration: 1.5,
        ease: [0.45, 0, 0.55, 1],
        delay: 1.5
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      /*
        The inline style below is optional if you're already
        forcing black in your global CSS. But having it doesn't hurt:
      */
      style={{ backgroundColor: 'black' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/products/desktop_loading.png')",
            filter: 'brightness(0.3)'
          }}
        />
      </motion.div>
    </motion.div>
  )
}
