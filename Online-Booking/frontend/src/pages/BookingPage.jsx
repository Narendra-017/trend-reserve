import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Sidebar from '../components/firstmile/Sidebar'

const BookingPage = () => {
  return (
    <div className="flex my-20 md:mt-0">
      <Sidebar />
      <div className="lg:w-[85%] w-full flex flex-col items-center justify-center text-center px-6">
        <div className="bg-pink-100 p-4 rounded-full">
          <FiSearch className="text-4xl text-gray-700" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">
          No orders found
        </h1>
        <p className="text-gray-600 text-xl mt-2">Please create one.</p>
        <Link
          to="/createbooking"
          className="bg-gray-950 text-gray-100 px-6 py-3 rounded-lg text-xl font-medium mt-6"
        >
          + Create Booking
        </Link>
      </div>
    </div>
  )
}

export default BookingPage
