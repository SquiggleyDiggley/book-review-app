import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AddBook() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    author: '',
    rating: '',
    review: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      ...form,
      id: Date.now().toString(),
      rating: parseInt(form.rating)
    }

    const stored = localStorage.getItem('books')
    const books = stored ? JSON.parse(stored) : []

    books.push(newBook)
    localStorage.setItem('books', JSON.stringify(books))

    alert('Book saved!')
    router.push('/')
  }

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">➕ Add a New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rating (1–5)</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            value={form.rating}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Review</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
