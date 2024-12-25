import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
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
import { Toast } from '@/components/shared/Toast'
import useToastStore from '@/store/toastStore'
import { LoadingIndicator } from '@/components/shared/LoadingIndicator'

export default function Shop() {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [displayedProducts, setDisplayedProducts] = useState([])
  const loadMoreRef = useRef(null)
  const PRODUCTS_PER_LOAD = 12
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { message, isVisible } = useToastStore()
  
  const [activePage, setActivePage] = useState('home')

  // Authorization check
  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (!verified) {
      router.push('/')
    } else {
      setIsAuthorized(true)
    }
    setIsLoading(false)
  }, [router])

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

  // Infinite scroll implementation
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

  useEffect(() => {
    const page = router.query.page
    if (page && typeof page === 'string') {
      setActivePage(page)
      localStorage.setItem('activePage', page)
    }
  }, [router.query.page])

  if (isLoading || !isAuthorized || isPageLoading) {
    return (
      <Layout
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        activePage={activePage}
        setActivePage={setActivePage}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        inputValue={inputValue}
        handleSearchChange={handleSearchChange}
      >
        <div className="flex-1 px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {activePage === 'home' && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="animate-pulse space-y-4">
                  <div className="h-48 bg-white/5 rounded-xl" />
                  <div className="h-32 bg-white/5 rounded-xl" />
                  <div className="h-32 bg-white/5 rounded-xl" />
                </div>
              </div>
            )}
            {activePage === 'products' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-square bg-white/5 rounded-lg mb-4" />
                    <div className="h-4 bg-white/5 rounded mb-2" />
                    <div className="h-3 bg-white/5 rounded w-2/3" />
                  </div>
                ))}
              </div>
            )}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
              <LoadingIndicator />
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Layout
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        activePage={activePage}
        setActivePage={setActivePage}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        inputValue={inputValue}
        handleSearchChange={handleSearchChange}
      >
        {activePage === 'home' && (
          <div className="min-h-[calc(100vh-4rem)] max-w-4xl mx-auto overflow-y-auto px-4">
            <div className="py-4 space-y-6 md:space-y-8">
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