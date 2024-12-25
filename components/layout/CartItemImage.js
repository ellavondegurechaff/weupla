import { useState } from 'react'

export function CartItemImage({ src, name }) {
  const [hasError, setHasError] = useState(false)
  const firstLetter = name?.charAt(0).toUpperCase() || '?'
  
  if (hasError || !src) {
    return (
      <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 
        rounded-md flex items-center justify-center"
      >
        <span className="text-2xl font-bold text-orange-500/50">
          {firstLetter}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-16 h-16 object-cover rounded-md"
      onError={() => setHasError(true)}
    />
  )
}
