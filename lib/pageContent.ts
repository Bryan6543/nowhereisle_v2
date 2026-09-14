export async function getPageFields(slug: string): Promise<Record<string, string>> {
  const api = process.env.NEXT_PUBLIC_API_URL
  if (!api) return {}
  try {
    const res = await fetch(`${api}/api/pages/${slug}`, { cache: 'no-store' })
    const data = await res.json()
    if (!data.success) return {}
    return data.fields as Record<string, string>
  } catch {
    return {}
  }
}

export function pick(fields: Record<string, string>, key: string, fallback: string) {
  return fields[key] && fields[key].trim() ? fields[key] : fallback
}