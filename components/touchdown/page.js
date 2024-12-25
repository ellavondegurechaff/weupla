'use client'

import { useState } from 'react'
import { ProofOfSalesGrid } from '@/components/touchdown/ProofOfSalesGrid'

export default function ProofOfSalesPage() {
  // Placeholder data - replace with actual data fetching
  const [displayedProofs] = useState(Array(12).fill({}))
  const [isLoading] = useState(false)

  return (
    <ProofOfSalesGrid
      displayedProofs={displayedProofs}
      isLoading={isLoading}
      loadMoreRef={null} // Add infinite scroll logic if needed
    />
  )
}