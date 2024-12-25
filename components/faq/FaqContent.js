import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { marked } from 'marked'

export function FaqContent() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      q: 'How do I Verify?',
      a: '🎥 **Video Verification Process:**\n\nSend us a video to our SIGNAL showing Weed & Proof of Funds. Say "WeUpLA Verification" in the video or write it on a piece of paper. Show time & date. Our Verification team will review it and get back to you ASAP. The better your verification, the faster we will approve.',
      icon: '🔐'
    },
    {
      q: 'How do I get started on my first order?',
      a: '🚀 **First Order Process:**\n\nFirst step, make sure you are **Verified**. Only clients who are **Verified** will get an immediate response. Once you are **Verified**, contact our sales rep on Signal. If you have an Order in your CART, simply press copy list and send it over on SIGNAL MESSENGER. We will take payment and get your order out immediately. It\'s that SIMPLE.',
      icon: '🛍️'
    },
    {
      q: 'What payments are accepted?',
      a: '💰 **Payment Options:**\n\n```\n• Cashapp..... 5%\n• Zelle.......... 5%\n• Crypto......... 4%\n• Cash Mail In 0%\n```',
      icon: '💳'
    },
    {
      q: 'Do prices on the menu include shipping?',
      a: '🚚 **Shipping Info:**\n\nYes, all prices on the menu are shipped prices. Depending on your location, regular transit times can take around 2 - 3 days.\n\n**BONUS:** Ordering 4+ Ps will automatically upgrade your order to FREE OVERNIGHT SHIPPING!',
      icon: '📦'
    },
    {
      q: 'How long will my order take to ship?',
      a: '⏰ **Shipping Schedule:**\n\nOur cutoff time is 12PM PST. If you place your order before our cutoff time you will receive tracking same day.',
      icon: '🚚'
    },
    {
      q: 'What if I want overnight shipping but I\'m unable to buy 4+ Ps?',
      a: '⚡ **Express Shipping Options:**\n\nYou can always add 2 day shipping or Overnight shipping services to any small order for the following rates:\n\n```\n• 2 Day Shipping = $150\n(On top of order total)\n\n• Overnight Shipping = $200\n(On top of order total)\n```',
      icon: '⚡'
    },
    {
      q: 'If I want to order bulk and get transportation to my city, do you offer that service?',
      a: '🌎 **Bulk Order & Transportation Service:**\n\nYes, you can work closely with our sales to order TO-YOUR-DOOR delivery. Here are our requirements:\n\n```\n• $5K Minimum\n(For regular transit city)\n\n• Trucking Rates will depend on your location.\nWork closely with a sales rep to insure we get\nyou the BEST RATES.\n```',
      icon: '🌎'
    },
    {
      q: 'Do you offer insurance on my shipping order?',
      a: '🛡️ **Insurance Coverage:**\n\nYes, all orders are 100% insured. If your package is seized or stuck in transit we will send a new box your way!',
      icon: '🔒'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-orange-500 mb-8 text-center"
      >
        Frequently Asked Questions
      </motion.h1>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-black/40 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-orange-400">{item.q}</h3>
              </div>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div 
                    className="prose prose-invert max-w-none prose-orange"
                    dangerouslySetInnerHTML={{ 
                      __html: marked.parse(item.a)
                    }} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 