'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('Processing...')

  useEffect(() => {
    async function doUnsubscribe() {
      if (!token) {
        setStatus('error')
        setMessage('Invalid unsubscribe link (missing token).')
        return
      }

      const apiBase = process.env.NEXT_PUBLIC_API_URL

      if (!apiBase) {
        setStatus('error')
        setMessage('Something went wrong on our side. Please try the link again later.')
        return
      }

      try {
        const res = await fetch(
          `${apiBase}/api/unsubscribe?token=${encodeURIComponent(token)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await res.json().catch(() => null)

        if (!res.ok) {
          setStatus('error')
          setMessage(data?.error || `Request failed (${res.status})`)
          return
        }

        if (data?.success) {
          setStatus('success')
          setMessage(`You have been unsubscribed${data.email ? ` (${data.email})` : ''}.`)
        } else {
          setStatus('error')
          setMessage(data?.error || 'Something went wrong.')
        }
      } catch (err: any) {
        setStatus('error')
        setMessage(err?.message || 'Network error while unsubscribing.')
      }
    }

    doUnsubscribe()
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Unsubscribe</h1>

        {status === 'loading' && <p className="text-zinc-400">{message}</p>}
        {status === 'success' && <p className="text-green-600">{message}</p>}
        {status === 'error' && <p className="text-red-600">{message}</p>}
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  )
}