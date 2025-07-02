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

    alert('Book added successfully! 📚')
    router.push('/')
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center text-warning fw-bold mb-4">➕ Add a New Book</h1>

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Author</label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Rating (1–5)</label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                value={form.rating}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Review</label>
              <textarea
                name="review"
                value={form.review}
                onChange={handleChange}
                required
                rows="4"
                className="form-control"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger fw-bold">
                Save Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
