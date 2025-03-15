import React, { useState } from 'react'
import { FiHome, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const getLinkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-xl font-semibold ${
      location.pathname === path
        ? 'bg-gray-950 text-gray-100'
        : 'hover:bg-gray-950 hover:text-gray-100'
    }`

  return (
    <>
      <button
        className="lg:hidden p-3 text-gray-950 fixed top-4 left-4 z-50 bg-gray-100 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-100 text-gray-950 max-w-[80%] p-6 flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:w-[15%] z-40`}
      >
        <div className="flex items-center gap-3 mb-6">
          <img
            src=""
            alt="ShadowFax"
            className="w-10 h-10 bg-gray-700 rounded-full"
          />
          <h1 className="text-2xl font-bold">Shadow Fax</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/bookingpage" className={getLinkClass('/bookingpage')}>
            <FiHome className="text-xl" />
            <span>Booking</span>
          </Link>
          <Link to="/basketpage" className={getLinkClass('/basketpage')}>
            <FiShoppingBag className="text-xl" />
            <span>Basket</span>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default Sidebar
