import Image from 'next/image'
import { LoadingIndicator } from '../shared/LoadingIndicator'

export function ProofOfSalesGrid({ isLoading, loadMoreRef }) {
  // Create an array of 12 blank items for initial display
  const blankProofs = Array(12).fill(null)

  return (
    <div className="min-h-screen px-4 py-4">
      {/* Title Section */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/10 px-6 py-2 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Touchdown
          </h2>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blankProofs.map((_, index) => (
          <div 
            key={index}
            className="aspect-square relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden 
              transform transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-white/30">
              <span className="text-sm">Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Trigger */}
      <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
        {isLoading && <LoadingIndicator />}
      </div>
    </div>
  )
}