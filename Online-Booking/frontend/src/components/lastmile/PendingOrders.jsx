import React, { useState } from 'react'
import Search from '../common/Search'

const orders = [
  {
    lrNumber: 'HYD12345',
    name: 'John Doe',
    contact: '+91 9876543210',
    goods: 5,
    amount: '₹10,000',
    status: 'Pending',
    riderName: 'Ravi Kumar',
  },
  {
    lrNumber: 'HYD12346',
    name: 'Jane Smith',
    contact: '+91 9123456789',
    goods: 3,
    amount: '₹7,500',
    status: 'Pending',
    riderName: 'Amit Sharma',
  },
  {
    lrNumber: 'HYD12347',
    name: 'Alice Brown',
    contact: '+91 9001122334',
    goods: 8,
    amount: '₹15,000',
    status: 'Pending',
    riderName: 'Suresh Reddy',
  },
  {
    lrNumber: 'HYD12348',
    name: 'Robert Wilson',
    contact: '+91 9876512345',
    goods: 2,
    amount: '₹5,000',
    status: 'Pending',
    riderName: 'Vikram Singh',
  },
  {
    lrNumber: 'HYD12349',
    name: 'Emily Johnson',
    contact: '+91 9112233445',
    goods: 6,
    amount: '₹12,000',
    status: 'Pending',
    riderName: 'Deepak Yadav',
  },
  {
    lrNumber: 'HYD12350',
    name: 'Michael White',
    contact: '+91 9234567890',
    goods: 4,
    amount: '₹9,000',
    status: 'Pending',
    riderName: 'Rajesh Verma',
  },
  {
    lrNumber: 'HYD12351',
    name: 'Chris Evans',
    contact: '+91 9345678901',
    goods: 10,
    amount: '₹20,000',
    status: 'Pending',
    riderName: 'Manoj Patel',
  },
  {
    lrNumber: 'HYD12352',
    name: 'Sophia Martinez',
    contact: '+91 9456789012',
    goods: 7,
    amount: '₹14,000',
    status: 'Pending',
    riderName: 'Naveen Kumar',
  },
  {
    lrNumber: 'HYD12353',
    name: 'David Brown',
    contact: '+91 9567890123',
    goods: 5,
    amount: '₹10,000',
    status: 'Pending',
    riderName: 'Rahul Mishra',
  },
  {
    lrNumber: 'HYD12354',
    name: 'Laura Adams',
    contact: '+91 9678901234',
    goods: 3,
    amount: '₹6,000',
    status: 'Pending',
    riderName: 'Arjun Singh',
  },
]

const PendingOrders = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredOrders, setFilteredOrders] = useState(orders)
  const itemsPerPage = 5
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setFilteredOrders(
        orders.filter((order) => order.lrNumber.includes(searchTerm))
      )
      setCurrentPage(1)
    } else {
      setFilteredOrders(orders)
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <div className="w-full flex flex-col items-center my-10 px-4">
      <Search onSearch={handleSearch} />

      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-950 text-white">
            <tr>
              <th className="border p-3 text-left">LR Number</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Contact</th>
              <th className="border p-3 text-left">No. of Goods</th>
              <th className="border p-3 text-left">Amount Paid</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Rider Name</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-3">{order.lrNumber}</td>
                  <td className="border p-3">{order.name}</td>
                  <td className="border p-3">{order.contact}</td>
                  <td className="border p-3">{order.goods}</td>
                  <td className="border p-3">{order.amount}</td>
                  <td className="border p-3">{order.status}</td>
                  <td className="border p-3">{order.riderName || 'N/A'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="border p-3 text-center text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-4 mt-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:bg-gray-500"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:bg-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PendingOrders
