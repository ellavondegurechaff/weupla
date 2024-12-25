import { ProductCard } from './ProductCard'
import { LoadingIndicator } from '../shared/LoadingIndicator'
import { FilterModal } from './FilterModal'
import { categories } from '@/utils/constants'

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
  // Get category names for selected categories
  const selectedCategoryNames = selectedCategories.map(id => 
    categories.find(cat => cat.id === id)?.name
  ).filter(Boolean)

  return (
    <div className="min-h-screen px-4 py-4">
      {/* Category Title Section */}
      {selectedCategories.length > 0 && (
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 px-6 py-2 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {selectedCategoryNames.join(' & ')}
            </h2>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Trigger */}
      {displayedProducts.length < filteredProducts.length && (
        <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
          {isLoading && <LoadingIndicator />}
        </div>
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
      />
    </div>
  )
} 