import { Navigation } from './Navigation'
import { Sidebar } from './Sidebar'
import { CartSidebar } from './CartSidebar'
import { Toast } from '@/components/shared/Toast'
import useToastStore from '@/store/toastStore'
import Head from 'next/head'

export function Layout({ children, ...props }) {
  const { message, isVisible } = useToastStore()
  
  return (
    <>
      <Head>
        <title>{props.activePage === 'products' ? 'GOODSHOP' : 'WeUpLA'}</title>
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/products/logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/products/logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/products/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="WeUpLA" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="apple-touch-icon" sizes="152x152" href="/products/logo.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/products/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/products/logo.png" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-800 via-orange-600 to-orange-700 overflow-hidden">
        <Navigation {...props} />
        <Sidebar {...props} />
        <CartSidebar {...props} />
        
        <main className={`flex-1 ${props.activePage === 'products' ? 'pt-28 md:pt-20' : 'pt-16'} relative z-10`}>
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>

        <Toast message={message} isVisible={isVisible} />
      </div>
    </>
  )
}