import { X, ShoppingCart, Plus, Minus, ArrowRight } from 'lucide-react'
import useCartStore from '@/store/cartStore'
import { CartItemImage } from './CartItemImage'
import { useEffect, useState } from 'react'

export function CartSidebar({ isCartOpen, setIsCartOpen, activePage }) {
  const [isMounted, setIsMounted] = useState(false)
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price
    return typeof numPrice === 'number' ? numPrice.toFixed(2) : '0.00'
  }

  const copyCartToClipboard = () => {
    const cartText = cart.map(item => (
      `${item.name}\n` +
      `Quantity: ${item.quantity}\n` +
      `------------------\n` +
      `Intown Price: $${formatPrice(item.intown_price)} × ${item.quantity}\n` +
      `Intown Total: $${formatPrice(item.intown_price * item.quantity)}\n` +
      `------------------\n` +
      `Shipped Price: $${formatPrice(item.shipped_price)} × ${item.quantity}\n` +
      `Shipped Total: $${formatPrice(item.shipped_price * item.quantity)}\n` +
      `==================`
    )).join('\n\n')
    
    const totals = getTotalPrice()
    const totalText = 
      `\n\nORDER SUMMARY\n` +
      `==================\n` +
      `Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n` +
      `Intown Total: $${formatPrice(totals.intown)}\n` +
      `Shipped Total: $${formatPrice(totals.shipped)}\n` +
      `==================`

    const fullText = 
      `🛒 NEW ORDER REQUEST\n` +
      `==================\n\n` +
      `ITEMS:\n` +
      `==================\n` +
      `${cartText}${totalText}`

    navigator.clipboard.writeText(fullText)
      .then(() => {
        const notification = document.createElement('div')
        notification.className = 
          'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-[170] cursor-pointer'
        notification.textContent = 'Order details copied to clipboard!'
        
        notification.addEventListener('click', () => {
          notification.style.opacity = '0'
          setTimeout(() => {
            document.body.removeChild(notification)
          }, 300)
        })

        document.body.appendChild(notification)
        
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.style.opacity = '0'
            setTimeout(() => {
              if (document.body.contains(notification)) {
                document.body.removeChild(notification)
              }
            }, 300)
          }
        }, 3000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
        alert('Failed to copy order details. Please try again.')
      })
  }

  const handleQuantityChange = (itemId, value) => {
    // Remove any non-numeric characters
    const cleanValue = value.replace(/[^\d]/g, '')
    
    // Convert to number, default to 1 if empty
    const numValue = cleanValue === '' ? 1 : parseInt(cleanValue, 10)
    
    // Limit to reasonable quantity (max 999)
    if (!isNaN(numValue) && numValue > 0) {
      const limitedValue = Math.min(numValue, 999)
      updateQuantity(itemId, limitedValue)
    }
  }

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[150] md:hidden"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      <div 
        className={`fixed right-0 w-full sm:w-96 bg-white shadow-xl transform 
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
          top-0 h-full transition-transform duration-300 ease-in-out z-[160]`}
      >
        <div className="h-full flex flex-col pt-16">
          <div className="px-4 py-3 bg-orange-50 flex justify-between items-center border-b border-orange-100">
            <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Clear Cart button */}
          {cart.length > 0 && (
            <div className="px-4 py-2 bg-white border-b border-gray-100">
              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:text-red-700 transition-colors flex items-center space-x-2"
              >
                <X size={14} />
                <span>Clear Cart</span>
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingCart size={32} className="mb-3" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <CartItemImage src={item.image} name={item.name} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-900 truncate">{item.name}</h3>
                      <div className="flex flex-col gap-0.5 mt-1">
                        <p className="text-sm text-gray-700">
                          Intown: <span className="text-orange-600 font-semibold">${formatPrice(item.intown_price)}</span>
                        </p>
                        <p className="text-sm text-gray-700">
                          Shipped: <span className="text-orange-600 font-semibold">${formatPrice(item.shipped_price)}</span>
                        </p>
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-700"
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={3}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="w-12 px-2 py-0.5 bg-white border border-gray-200 rounded text-center text-sm 
                            focus:outline-none focus:ring-1 focus:ring-orange-500 text-gray-900"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-700"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500 p-1.5"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-4 bg-orange-50 border-t border-orange-100">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Intown Total:</span>
                  <span className="text-xl font-bold text-orange-600">
                    ${formatPrice(getTotalPrice().intown)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Shipped Total:</span>
                  <span className="text-xl font-bold text-orange-600">
                    ${formatPrice(getTotalPrice().shipped)}
                  </span>
                </div>
              </div>
              <button
                onClick={copyCartToClipboard}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 
                  transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Copy Order Details</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 