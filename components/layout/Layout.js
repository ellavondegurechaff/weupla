import { Navigation } from './Navigation'
import { Sidebar } from './Sidebar'
import { CartSidebar } from './CartSidebar'
import { Toast } from '@/components/shared/Toast'
import useToastStore from '@/store/toastStore'

export function Layout({ children, ...props }) {
  const { message, isVisible } = useToastStore()
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-800 via-orange-600 to-orange-700">
      <Navigation {...props} />
      <Sidebar {...props} />
      <CartSidebar {...props} />
      
      <main className={`flex-1 ${props.activePage === 'products' ? 'pt-28 md:pt-20' : 'pt-16'}`}>
        <div className="max-w-7xl mx-auto h-full">
          {children}
        </div>
      </main>

      <Toast message={message} isVisible={isVisible} />
    </div>
  )
}