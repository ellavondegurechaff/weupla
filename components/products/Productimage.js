import { useState } from 'react'

export function ProductImage({ src, name, className = '' }) {
  const [hasError, setHasError] = useState(false)
  const firstLetter = name?.charAt(0).toUpperCase() || '?'
  
  if (hasError || !src) {
    return (
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 
        flex items-center justify-center ${className}`}
      >
        <span className="text-6xl font-bold text-orange-500/50">
          {firstLetter}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
