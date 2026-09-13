'use client'

import { useEffect, useState } from 'react'
import { pick } from '@/lib/pageContent'

export function usePageFields(slug: string) {
  const [fields, setFields] = useState<Record<string, string>>({})

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL
    if (!api) return
    fetch(`${api}/api/pages/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setFields(data.fields || {})
      })
      .catch(() => {})
  }, [slug])

  return (key: string, fallback: string) => pick(fields, key, fallback)
}