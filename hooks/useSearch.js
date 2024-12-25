import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

export function useSearch() {
  const [inputValue, setInputValue] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortOrder, setSortOrder] = useState('newest')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = (event) => {
    setInputValue(event.target.value)
  }

  const searchProducts = async (search, categories) => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (search) params.append('q', search)
      if (categories.length) params.append('categories', categories.join(','))
      
      const response = await fetch(`/api/search?${params}`)
      if (!response.ok) throw new Error('Search failed')
      
      const data = await response.json()
      
      // Apply sorting
      const sortedData = sortProducts(data, sortOrder)
      setProducts(data)
      setFilteredProducts(sortedData)
    } catch (error) {
      console.error('Search failed:', error)
      setFilteredProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  const sortProducts = (products, order) => {
    return [...products].sort((a, b) => {
      switch (order) {
        case 'price-low':
          return a.shipped_price - b.shipped_price
        case 'price-high':
          return b.shipped_price - a.shipped_price
        case 'name-az':
          return a.name.localeCompare(b.name)
        case 'name-za':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })
  }

  // Define debouncedSearch before using it
  const debouncedSearch = debounce(searchProducts, 300)

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev => {
      if (categoryId === 'all') {
        return prev.includes('all') ? [] : ['all']
      }
      
      const newCategories = prev.filter(id => id !== 'all')
      if (prev.includes(categoryId)) {
        return newCategories.filter(id => id !== categoryId)
      }
      return [...newCategories, categoryId]
    })
  }

  useEffect(() => {
    debouncedSearch(inputValue, selectedCategories)
    return () => debouncedSearch.cancel()
  }, [inputValue, selectedCategories, sortOrder])

  useEffect(() => {
    // Initial data fetch
    searchProducts('', [])
  }, []) // Empty dependency array for initial load only

  return {
    inputValue,
    setInputValue,
    handleSearchChange,
    selectedCategories,
    handleCategoryChange,
    sortOrder,
    handleSortChange: setSortOrder,
    handleClearFilters: () => {
      setSelectedCategories([])
      setSortOrder('newest')
      setInputValue('')
    },
    products,
    filteredProducts,
    isLoading
  }
} 