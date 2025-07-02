import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BookDetail() {
  const router = useRouter()
  const { id } = router.query
  const [book, setBook] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('books')
      if (stored) {
        const books = JSON.parse(stored)
        const found = books.find((b) => b.id === id)
        setBook(found)
      }
    }
  }, [id])

  if (!book) {
    return (
      <div className="container py-5">
        <h2 className="text-center text-muted">Loading book details...</h2>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm bg-light p-4">
            <h1 className="text-warning fw-bold mb-3">{book.title}</h1>
            <h5 className="text-muted mb-3">by {book.author}</h5>

            <p className="mb-2">
              <strong>Rating:</strong> ⭐ {book.rating}/5
            </p>

            <p className="mb-4">
              <strong>Review:</strong><br />
              {book.review}
            </p>

            <button
              className="btn btn-outline-secondary"
              onClick={() => router.push('/')}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
