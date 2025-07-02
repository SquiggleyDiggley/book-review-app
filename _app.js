import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link href="/" className="navbar-brand fw-bold text-warning">
          📚 Straw Hat Reviews
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/add" className="nav-link">Add Book</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Page Content */}
      <Component {...pageProps} />
    </>
  )
}
