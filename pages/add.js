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
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br /><br />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required /><br /><br />
        <input name="rating" placeholder="Rating (1–5)" type="number" min="1" max="5" value={form.rating} onChange={handleChange} required /><br /><br />
        <textarea name="review" placeholder="Your review" value={form.review} onChange={handleChange} required /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
