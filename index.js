import Link from 'next/link'
import books from '../data/books.json'

export default function Home() {
  return (
    <main className="p-6 font-sans max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Book Reviews</h1>
      <ul className="space-y-4">
        {books.map(book => (
          <li key={book.id} className="border p-4 rounded shadow">
            <Link href={`/books/${book.id}`}>
              <p className="font-semibold text-lg">{book.title}</p>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p>⭐ {book.rating}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/add">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            ➕ Add a New Book
          </button>
        </Link>
      </div>
    </main>
  )
}
