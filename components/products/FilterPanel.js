import { X, ChevronDown } from 'lucide-react'
import { categories } from '@/utils/constants'

export function FilterPanel({ 
  isOpen, 
  onClose, 
  selectedCategories,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClearFilters 
}) {
  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price (low to high)' },
    { id: 'price-high', label: 'Price (high to low)' },
    { id: 'name-az', label: 'Name A-Z' },
    { id: 'name-za', label: 'Name Z-A' }
  ]

  return (
    <div className={`fixed inset-0 z-[140] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative w-full max-w-xs h-full bg-gray-900 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} className="p-1.5 hover:text-orange-500">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Filter By Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Filter By</h3>
              <ChevronDown size={16} />
            </div>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => onCategoryChange(category.id)}
                    className="rounded border-gray-600 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-sm">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Sort By</h3>
              <ChevronDown size={16} />
            </div>
            <div className="space-y-2">
              {sortOptions.map(option => (
                <label key={option.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="sort"
                    value={option.id}
                    checked={sortOrder === option.id}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClearFilters}
          className="fixed bottom-4 left-4 right-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}
