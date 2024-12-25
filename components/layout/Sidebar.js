import { useState } from 'react'
import { navigationLinks } from '@/utils/constants'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function Sidebar({ isMenuOpen, setIsMenuOpen, activePage, setActivePage }) {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[150] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div 
        className={`fixed left-0 w-64 bg-gray-900 transform 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          top-0 h-full transition-transform duration-300 ease-in-out z-[160]`}
      >
        <div className="h-full flex flex-col">
          {/* Logo container */}
          <div className="h-16 flex items-center px-4 space-x-3 border-b border-white/10">
            <img 
              src="/products/logo.png"
              alt="WeUpLa Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold text-white">WeUpLA</h1>
          </div>
          
          <nav className="flex-1 overflow-y-auto">
            {navigationLinks.map(link => (
              <div key={link.id}>
                <button
                  onClick={() => {
                    if (link.children) {
                      toggleExpanded(link.id)
                    } else {
                      setActivePage(link.id)
                      setIsMenuOpen(false)
                    }
                  }}
                  className={`w-full flex items-center justify-between px-6 py-3 transition-colors
                    ${activePage === link.id ? 'text-orange-500 bg-orange-500/10' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  <div className="flex items-center space-x-3">
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </div>
                  {link.children && (
                    expandedItems[link.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                  )}
                </button>

                {/* Submenu items */}
                {link.children && expandedItems[link.id] && (
                  <div className="bg-gray-800/50 py-1">
                    {link.children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => {
                          setActivePage(child.id)
                          setIsMenuOpen(false)
                        }}
                        className="w-full flex items-center px-12 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
} 