import { useState, useEffect, useRef } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/home/Hero'
import { InfoCards } from '@/components/home/InfoCards'
import { PaymentMethods } from '@/components/home/PaymentMethods'
import { Services } from '@/components/home/Services'
import { ProductGrid } from '@/components/products/ProductGrid'
import { AboutContent } from '@/components/about/AboutContent'
import { ContactContent } from '@/components/contact/ContactContent'
import { FaqContent } from '@/components/faq/FaqContent'
import { useSearch } from '@/hooks/useSearch'
import { products } from '@/utils/constants'
import { Toast } from '@/components/shared/Toast'
import useToastStore from '@/store/toastStore'

export default function EcommerceWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('activePage') || 'home'
    }
    return 'home'
  })
  const [displayedProducts, setDisplayedProducts] = useState([])
  const loadMoreRef = useRef(null)
  const PRODUCTS_PER_LOAD = 12
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { message, isVisible } = useToastStore()

  // Handle localStorage in useEffect to avoid hydration mismatch
  useEffect(() => {
    const savedPage = localStorage.getItem('activePage')
    if (savedPage) {
      setActivePage(savedPage)
    }
    setIsPageLoading(false)
  }, [])

  // Save active page to localStorage when it changes
  useEffect(() => {
    if (activePage) {
      localStorage.setItem('activePage', activePage)
    }
  }, [activePage])

  const { 
    filteredProducts,
    selectedCategories,
    handleCategoryChange,
    sortOrder,
    handleSortChange,
    handleClearFilters,
    isLoading: searchLoading,
    inputValue,
    handleSearchChange
  } = useSearch()

  // Reset displayed products when search changes
  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(0, PRODUCTS_PER_LOAD))
  }, [filteredProducts])

  // Improved infinite scroll implementation
  useEffect(() => {
    if (!loadMoreRef.current || activePage !== 'products') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting && !isLoading && displayedProducts.length < filteredProducts.length) {
          setIsLoading(true)
          
          setTimeout(() => {
            setDisplayedProducts(prev => {
              const currentLength = prev.length
              const nextBatch = filteredProducts.slice(
                currentLength,
                currentLength + PRODUCTS_PER_LOAD
              )
              return [...prev, ...nextBatch]
            })
            setIsLoading(false)
          }, 500)
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    observer.observe(loadMoreRef.current)

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [filteredProducts, isLoading, displayedProducts.length, activePage])

  const layoutProps = {
    isMenuOpen,
    setIsMenuOpen,
    isCartOpen,
    setIsCartOpen,
    activePage,
    setActivePage,
    isFilterOpen,
    setIsFilterOpen,
    inputValue,
    handleSearchChange
  }

  if (isPageLoading) {
    return null // or a loading spinner if you prefer
  }

  return (
    <>
      <Layout {...layoutProps}>
        {activePage === 'home' && (
          <div className="h-[calc(100vh-5rem)] max-w-4xl mx-auto">
            <div className="hidden md:grid md:grid-rows-[auto_1fr_1fr_1fr] md:gap-4 py-4">
              <Hero />
              <InfoCards />
              <PaymentMethods />
              <Services />
            </div>
            <div className="md:hidden flex flex-col gap-3 py-2 overflow-y-auto h-full">
              <Hero />
              <InfoCards />
              <PaymentMethods />
              <Services />
            </div>
          </div>
        )}
        
        {activePage === 'products' && (
          <ProductGrid
            displayedProducts={displayedProducts}
            filteredProducts={filteredProducts}
            isLoading={isLoading}
            loadMoreRef={loadMoreRef}
            handleCategoryChange={handleCategoryChange}
            selectedCategories={selectedCategories}
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
            handleClearFilters={handleClearFilters}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
        )}
        
        {activePage === 'about' && <AboutContent />}
        {activePage === 'contact' && <ContactContent />}
        {activePage === 'faq' && <FaqContent />}
      </Layout>
      <Toast message={message} isVisible={isVisible} />
    </>
  )
} 