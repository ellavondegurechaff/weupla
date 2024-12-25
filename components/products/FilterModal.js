import { X } from 'lucide-react'
import { categories } from '@/utils/constants'

export function FilterModal({ 
  isOpen, 
  onClose, 
  selectedCategories,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClearFilters 
}) {
  if (!isOpen) return null

  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price (low to high)' },
    { id: 'price-high', label: 'Price (high to low)' },
    { id: 'name-az', label: 'Name A-Z' },
    { id: 'name-za', label: 'Name Z-A' }
  ]

  return (
    <div className="fixed inset-0 z-[200]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute inset-x-0 top-[calc(4rem+2.5rem)] md:top-28 bottom-0 
        md:relative md:mx-auto md:mt-16 md:max-w-md">
        
        <div className="h-full md:h-auto bg-gray-900 md:rounded-xl 
          flex flex-col overflow-hidden shadow-xl">
          
          <div className="flex justify-between items-center p-4 border-b border-gray-700/50">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="p-1.5 hover:text-orange-500">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-3">Filter By Category</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center space-x-2 p-2 bg-gray-800/50 rounded-lg">
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

                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {sortOptions.map(option => (
                      <label key={option.id} className="flex items-center space-x-2 p-2">
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
            </div>
          </div>

          <div className="p-4 border-t border-gray-700/50">
            <button
              onClick={onClearFilters}
              className="w-full bg-orange-500 text-white py-2 rounded-lg 
                hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 