import { ProductCard } from './ProductCard'
import { LoadingIndicator } from '../shared/LoadingIndicator'
import { FilterModal } from './FilterModal'

export function ProductGrid({ 
  displayedProducts, 
  filteredProducts, 
  isLoading, 
  loadMoreRef,
  handleCategoryChange,
  selectedCategories = [],
  sortOrder = 'newest',
  handleSortChange,
  handleClearFilters,
  isFilterOpen,
  setIsFilterOpen
}) {
  return (
    <div className="space-y-4 px-4 md:px-6 lg:px-8 pb-20">
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {displayedProducts.length < filteredProducts.length && (
        <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
          {isLoading && <LoadingIndicator />}
        </div>
      )}
    </div>
  )
} 