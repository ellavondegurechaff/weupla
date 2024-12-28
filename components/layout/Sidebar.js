import { useState, useEffect } from 'react'
import { navigationLinks } from '@/utils/constants'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function Sidebar({ isMenuOpen, setIsMenuOpen, activePage, setActivePage }) {
  const [expandedItems, setExpandedItems] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const socialLinks = (
    <div className="border-t border-white/10 p-4">
      <div className="flex justify-center space-x-4">
        <a
          href="https://t.me/weupla"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
        >
          <svg className="w-6 h-6 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a
          href="signal://+1234567890"
          className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
        >
          <svg className="w-6 h-6 text-[#3A76F0]" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 0c13.3 0 26.3 1 39.1 3l-3.7 23.7C279.9 24.9 268 24 256 24s-23.9 .9-35.4 2.7L216.9 3C229.7 1 242.7 0 256 0zm60.8 7.3l-5.7 23.3c23.4 5.7 45.4 14.9 65.4 27.1l12.5-20.5c-22.1-13.4-46.4-23.6-72.2-29.9zm90.5 42.2L393.1 68.8c19.1 14 36 30.9 50.1 50.1l19.4-14.2C447 83.6 428.4 65 407.3 49.5zm67.5 73.6l-20.5 12.5c12.2 20 21.4 42 27.1 65.4l23.3-5.7c-6.3-25.8-16.5-50.1-29.9-72.2zM509 216.9l-23.7 3.7c1.8 11.5 2.7 23.4 2.7 35.4s-.9 23.9-2.7 35.4l23.7 3.7c1.9-12.7 3-25.8 3-39.1s-1-26.3-3-39.1zM454.3 376.5c12.2-20 21.4-42 27.1-65.4l23.3 5.7c-6.3 25.8-16.5 50.1-29.9 72.2l-20.5-12.5zm-11.1 16.6l19.4 14.2c-15.5 21.1-34.1 39.8-55.2 55.2l-14.2-19.4c19.1-14 36-30.9 50.1-50.1zm-66.7 61.2l12.5 20.5c-22.1 13.4-46.4 23.6-72.2 29.9l-5.7-23.3c23.4-5.7 45.4-14.9 65.4-27.1zm-85.1 31l3.7 23.7c-12.7 1.9-25.8 3-39.1 3s-26.3-1-39.1-3l3.7-23.7c11.5 1.8 23.4 2.7 35.4 2.7s23.9-.9 35.4-2.7zm-90.5-3.9l-5.7 23.3c-19.4-4.7-37.9-11.6-55.3-20.5l-24.3 5.7-5.5-23.4 32.8-7.7 7.8 4c15.7 8 32.5 14.3 50.1 18.6zM90 471.3l5.5 23.4-41.6 9.7C26 510.8 1.2 486 7.6 458.2l9.7-41.6L40.7 422 31 463.7c-2.4 10.4 6.9 19.7 17.3 17.3L90 471.3zM45.5 401.8l-23.4-5.5L27.8 372C18.9 354.7 12 336.1 7.3 316.7l23.3-5.7c4.3 17.6 10.6 34.4 18.6 50.1l4 7.8-7.7 32.8zM26.7 291.4L3 295.1C1 282.3 0 269.3 0 256s1-26.3 3-39.1l23.7 3.7C24.9 232.1 24 244 24 256s.9 23.9 2.7 35.4zm3.9-90.5L7.3 195.2c6.3-25.8 16.5-50.1 29.9-72.2l20.5 12.5c-12.2 20-21.4 42-27.1 65.4zm38.3-82.1L49.5 104.7C65 83.6 83.6 65 104.7 49.5l14.2 19.4c-19.1 14-36 30.9-50.1 50.1zm66.7-61.2L123.1 37.2c22.1-13.4 46.4-23.6 72.2-29.9l5.7 23.3c-23.4 5.7-45.4 14.9-65.4 27.1zM464 256c0 114.9-93.1 208-208 208c-36.4 0-70.7-9.4-100.5-25.8c-2.9-1.6-6.2-2.1-9.4-1.4L53.6 458.4l21.6-92.5c.7-3.2 .2-6.5-1.4-9.4C57.4 326.7 48 292.4 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208z"/>
          </svg>
        </a>
      </div>
    </div>
  )

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[130] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-white transform 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out z-[140] overflow-hidden
          font-['Helvetica_Neue']`}
      >
        <div className="h-full flex flex-col pt-16">
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
                  className={`w-full flex items-center justify-between px-6 py-3 transition-colors font-['Helvetica']
                    ${activePage === link.id 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center space-x-3">
                    <link.icon size={20} />
                    <span className="font-['Helvetica']">{link.label}</span>
                  </div>
                  {link.children && (
                    expandedItems[link.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                  )}
                </button>

                {/* Submenu items */}
                {link.children && expandedItems[link.id] && (
                  <div className="bg-gray-50">
                    {link.children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => {
                          setActivePage(child.id)
                          setIsMenuOpen(false)
                        }}
                        className="w-full flex items-center px-12 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors font-['Helvetica']"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Add social links at the bottom of sidebar */}
          <div className="border-t border-gray-200 p-4 font-['Helvetica']">
            {socialLinks}
          </div>
        </div>
      </div>
    </>
  )
} 