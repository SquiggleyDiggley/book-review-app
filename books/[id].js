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

  if (!book) return <p style={{ padding: '20px' }}>Book not found.</p>

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating} ⭐</p>
      <p><strong>Review:</strong> {book.review}</p>
    </div>
  )
}
