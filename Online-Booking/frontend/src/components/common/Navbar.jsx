import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-around items-center py-5 px-6">
        <div className="flex items-center gap-3">
          <img src="#" alt="Shadowfax" className="h-10 w-10" />
          <h1 className="text-3xl font-bold">Shadow Fax</h1>
        </div>

        <div className="hidden md:flex space-x-8 text-xl font-semibold">
          <Link
            to="/"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
          >
            Services
          </Link>
          <Link
            to="/support"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
          >
            Support
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/first-mile-login"
            className="bg-gray-950 text-white rounded-lg px-6 py-2 transition hover:bg-gray-800 text-xl"
          >
            Login
          </Link>
        </div>  
        <button className="md:hidden ml-5" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-100 text-xl">
          <Link
            to="/"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/support"
            className="hover:bg-gray-300 px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            to="/first-mile-login"
            className="bg-gray-950 text-white rounded-lg px-6 py-2 transition hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
