import { navigationLinks } from '@/utils/constants'

export function Sidebar({ isMenuOpen, setIsMenuOpen, activePage, setActivePage }) {
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
        <div className="h-full flex flex-col pt-16">
          <nav className="flex-1 overflow-y-auto">
            {navigationLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id)
                  setIsMenuOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors
                  ${activePage === link.id ? 'text-orange-500 bg-orange-500/10' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
              >
                <link.icon size={20} />
                <span>{link.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
} 