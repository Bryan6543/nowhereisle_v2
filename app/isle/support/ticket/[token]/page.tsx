'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type Ticket = {
  id: string
  ticket_number: string
  subject: string
  status: string
  created_at: string
}

type Message = {
  id: string
  sender_type: 'customer' | 'admin'
  message: string
  created_at: string
}

export default function PublicTicketPage() {
  const params = useParams()
  const token = Array.isArray(params.token) ? params.token[0] : (params.token as string)

  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/ticket/${token}`)
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Ticket not found')
      setTicket(data.ticket)
      setMessages(data.messages || [])
    } catch (err: any) {
      setError(err.message || 'Failed to load ticket')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) load()
  }, [token])

  const handleReply = async () => {
    if (!reply.trim()) return
    setSending(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support/ticket/${token}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: reply }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to reply')
      setReply('')
      await load()
    } catch (err: any) {
      alert(err.message || 'Failed to send reply')
    } finally {
      setSending(false)
    }
  }

  if (loading) return <div className="p-10 text-center">Loading ticket...</div>
  if (error || !ticket) return <div className="p-10 text-center text-red-400">{error || 'Ticket not found'}</div>

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Ticket {ticket.ticket_number}</h1>
      <p className="text-zinc-400 mb-1">{ticket.subject}</p>
      <p className="text-sm text-zinc-500 mb-8 capitalize">Status: {ticket.status.replaceAll('_', ' ')}</p>

      <div className="space-y-4 mb-8">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-2xl border ${
              m.sender_type === 'admin'
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-black border-zinc-800'
            }`}
          >
            <p className="text-xs text-zinc-500 mb-2">
              {m.sender_type === 'admin' ? 'Support Team' : 'You'} · {new Date(m.created_at).toLocaleString()}
            </p>
            <p className="whitespace-pre-wrap">{m.message}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          rows={5}
          className="w-full bg-black border border-zinc-800 rounded-2xl p-4"
          placeholder="Write a reply..."
        />
        <button
          onClick={handleReply}
          disabled={sending}
          className="px-6 py-3 bg-red-700 hover:bg-red-800 rounded-2xl disabled:opacity-60"
        >
          {sending ? 'Sending...' : 'Send Reply'}
        </button>
      </div>
    </main>
  )
}