import { ArrowRight } from 'lucide-react'
import useCartStore from '@/store/cartStore'
import { ProductImage } from './Productimage'
import useToastStore from '@/store/toastStore'

export function ProductCard({ product }) {
  const addToCart = useCartStore(state => state.addToCart)
  const showToast = useToastStore(state => state.showToast)

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price
    return typeof numPrice === 'number' ? numPrice.toFixed(2) : '0.00'
  }

  const handleAddToCart = () => {
    addToCart(product)
    showToast(`Added ${product.name} to cart`)
    const element = document.getElementById(`product-${product.id}`)
    element.classList.add('scale-105')
    setTimeout(() => {
      element.classList.remove('scale-105')
    }, 200)
  }

  return (
    <div
      id={`product-${product.id}`}
      className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden 
        transform transition-all duration-300 hover:scale-105 h-full shadow-lg"
    >
      <ProductImage
        src={product.image_url}
        name={product.name}
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
      />
      <div className="p-3 sm:p-4 md:p-5 flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 tracking-tight line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-auto space-y-2 sm:space-y-3 bg-gray-50 rounded-lg p-3 sm:p-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-sm font-medium text-gray-600">Intown:</span>
            <span className="text-lg sm:text-xl font-bold text-orange-500">
              ${formatPrice(product.intown_price)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">Shipped:</span>
            <span className="text-lg sm:text-xl font-bold text-orange-500">
              ${formatPrice(product.shipped_price)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#e35522] text-white px-4 py-2 rounded-lg 
              hover:bg-[#d14918] transition-all transform hover:scale-105 
              flex items-center justify-center group mt-2"
          >
            Add to Cart
            <ArrowRight size={16} className="ml-2 transform transition-transform 
              group-hover:translate-x-1 hidden sm:inline-block" />
          </button>
        </div>
      </div>
    </div>
  )
} 