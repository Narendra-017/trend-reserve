import React from 'react'
import LastMileSidebar from './LastMileSidebar'
import Search from '../common/Search'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <LastMileSidebar />
      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 space-y-10 md:space-y-20 w-full max-w-[85%]">
        <Search />

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 border-2 rounded-lg p-6 md:p-10 w-full md:w-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Pending Orders
          </h1>
          <Link
            to="/pending-orders"
            className="text-xl md:text-3xl text-gray-100 bg-gray-950 rounded-md py-2 px-6 font-semibold w-full md:w-auto"
          >
            0
          </Link>
        </div>

        <div>
          <Link
            to="/create-runsheet"
            className="flex items-center justify-center gap-3 text-lg md:text-2xl font-bold text-gray-100 bg-gray-950 py-3 px-6 rounded-xl w-full md:w-auto"
          >
            Create Runsheet
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
