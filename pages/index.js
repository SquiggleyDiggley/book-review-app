import { useEffect, useState } from 'react'
import Link from 'next/link'
import defaultBooks from '../data/books.json'

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('books')
    if (stored) {
      setBooks(JSON.parse(stored))
    } else {
      localStorage.setItem('books', JSON.stringify(defaultBooks))
      setBooks(defaultBooks)
    }
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📚 Book Reviews</h1>
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
            <Link href={`/books/${book.id}`}>
              <strong>{book.title}</strong> by {book.author} – ⭐ {book.rating}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <Link href="/add">
        <button>Add a New Book</button>
      </Link>
    </div>
  )
}
