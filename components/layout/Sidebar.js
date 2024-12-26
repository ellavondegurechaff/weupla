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

          {/* Add to Home Screen Text */}
          <div className="text-center px-4 pb-2 text-sm text-gray-400">
            Add to Home Screen
          </div>

          {/* Social Media Links */}
          <div className="border-t border-white/10 p-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://t.me/weupla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-6 h-6 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.845-1.359 5.593-.168.735-.319 1.418-.458 2.037-.236 1.048-.384 1.688-.484 2.134-.216.964-.441.963-.815.925-.694-.07-1.225-.043-1.729-.043s-.912-.071-1.106-.287c-.184-.205-.707-2.051-.989-2.799-.476-1.256-.952-2.51-1.427-3.766l-.323-.849c-.067-.173-.131-.335-.19-.477-.403-.972-.666-1.604-.666-1.604s-.012-.023-.033-.062c-.083-.155-.216-.303-.418-.348-.151-.034-.347-.052-.347-.052l-3.617.024s-.544.015-.743.254c-.171.207-.015.637-.015.637s2.463 5.757 5.254 8.657c2.558 2.66 5.459 2.485 5.459 2.485h1.314s.397-.043.601-.262c.186-.202.179-.582.179-.582s-.026-1.773.797-2.035c.812-.257 1.854 1.714 2.959 2.474.835.574 1.47.448 1.47.448l2.956-.041s1.546-.095.813-1.31c-.06-.099-.427-.898-2.196-2.539-1.855-1.719-1.607-1.44.628-4.413 1.36-1.815 1.905-2.923 1.735-3.398z"/>
                </svg>
              </a>
              <a
                href="signal://+1234567890"
                className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg className="w-6 h-6 text-[#3A76F0]" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,219.75a16,16,0,0,0,11.42,19.52,16.2,16.2,0,0,0,4.05.52,16,16,0,0,0,15.47-11.94l11.35-42.87A104,104,0,1,0,128,24ZM128,216a88,88,0,0,1-88-88c0-48.35,39.65-88,88-88s88,39.65,88,88C216,176.35,176.35,216,128,216Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 