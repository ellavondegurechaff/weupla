import { useState, useEffect } from 'react'
import { AgeLanding } from '@/components/landing/AgeLanding'
import { useRouter } from 'next/router'
import { LoadingIndicator } from '@/components/shared/LoadingIndicator'

export default function Home() {
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (verified === 'true') {
      router.push('/shop?page=products')
    }
    setIsLoading(false)
  }, [router])

  const handleVerified = (verified) => {
    if (verified) {
      router.push('/shop?page=products')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingIndicator />
      </div>
    )
  }

  return <AgeLanding onVerified={handleVerified} />
} 