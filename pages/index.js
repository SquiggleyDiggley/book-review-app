import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('books')
    if (stored) setBooks(JSON.parse(stored))
  }, [])

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 text-warning fw-bold">📚 Straw Hat Book Reviews</h1>
        <p className="lead text-secondary">Sail the Grand Line one book at a time!</p>

        {/* ✅ Bootstrap + Next.js 13+ compatible Link */}
        <Link href="/add" className="btn btn-danger mt-3">
          ➕ Add a Book
        </Link>
      </div>

      {books.length === 0 ? (
        <p className="text-center text-muted">No reviews yet. Be the first to add one!</p>
      ) : (
        <div className="row justify-content-center">
          {books.map((book) => (
            <div key={book.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
                  <p className="card-text mb-1">⭐ {book.rating}/5</p>
                  <p className="card-text flex-grow-1">{book.review}</p>

                  {/* ✅ Bootstrap button styled Next.js Link */}
                  <Link
                    href={`/books/${book.id}`}
                    className="mt-auto btn btn-outline-primary btn-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
