import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BookDetail() {
  const router = useRouter()
  const { id } = router.query

  const [book, setBook] = useState(null)

  useEffect(() => {
    if (!id) return

    const stored = localStorage.getItem('books')
    const books = stored ? JSON.parse(stored) : []
    const found = books.find(b => b.id === id)

    setBook(found)
  }, [id])

  if (!book) {
    return <p className="p-6 text-gray-600 font-medium">Book not found.</p>
  }

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

      <div className="space-y-2 text-lg">
        <p><span className="font-semibold text-gray-700">Author:</span> {book.author}</p>
        <p><span className="font-semibold text-gray-700">Rating:</span> ⭐ {book.rating}</p>
        <p><span className="font-semibold text-gray-700">Review:</span></p>
        <p className="bg-gray-100 border rounded p-3 text-base">{book.review}</p>
      </div>

      <div className="mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => router.push('/')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
