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
        
        <div className="h-full md:h-auto bg-white md:rounded-xl 
          flex flex-col overflow-hidden shadow-xl">
          
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button onClick={onClose} className="p-1.5 text-gray-500 hover:text-[#e35522]">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Filter By Category</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => onCategoryChange(category.id)}
                          className="rounded border-gray-300 text-[#e35522] focus:ring-[#e35522]"
                        />
                        <span className="text-sm text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {sortOptions.map(option => (
                      <label key={option.id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
                        <input
                          type="radio"
                          name="sort"
                          value={option.id}
                          checked={sortOrder === option.id}
                          onChange={(e) => onSortChange(e.target.value)}
                          className="text-[#e35522] focus:ring-[#e35522]"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={onClearFilters}
              className="w-full bg-[#e35522] text-white py-2 rounded-lg 
                hover:bg-[#d14918] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 