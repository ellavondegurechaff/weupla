import { Menu, ShoppingCart, Search, Filter } from 'lucide-react'
import useCartStore from '@/store/cartStore'
import { useState, useEffect } from 'react'

export function Navigation({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isCartOpen, 
  setIsCartOpen,
  inputValue,
  handleSearchChange,
  activePage,
  isFilterOpen,
  setIsFilterOpen
}) {
  const cart = useCartStore(state => state.cart)
  
  // Add useEffect for client-side rendering
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <nav className="bg-black/30 backdrop-blur-md text-white fixed w-full z-[100] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {/* Top bar */}
          <div className="flex justify-between h-16 items-center px-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu size={18} />
              </button>
              <img 
                src="/products/logo.png"
                alt="WeUpLa Logo"
                className="h-9 md:h-10 w-auto"
              />
            </div>

            {/* Only render search on client-side */}
            {isMounted && activePage === 'products' && (
              <div className="hidden md:flex flex-1 max-w-md mx-8 items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    value={inputValue}
                    onChange={handleSearchChange}
                    autoComplete="off"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center space-x-2"
                >
                  <Filter size={18} />
                  <span>Filter</span>
                </button>
              </div>
            )}

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors relative"
            >
              <ShoppingCart size={18} />
              {isMounted && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Search - Compact Version */}
          {isMounted && activePage === 'products' && (
            <div className="md:hidden px-4 pb-2">
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-1.5 bg-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    value={inputValue}
                    onChange={handleSearchChange}
                    autoComplete="off"
                  />
                  <Search className="absolute right-2.5 top-1.5 text-gray-400" size={16} />
                </div>
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="px-3 py-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center space-x-2"
                >
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 