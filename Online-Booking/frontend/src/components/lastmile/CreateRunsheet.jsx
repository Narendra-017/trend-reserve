import React, { useState } from 'react'
import { FaQrcode, FaUser } from 'react-icons/fa'

function CreateRunsheet() {
  const [lrNumber, setLrNumber] = useState('')
  const [selectedRider, setSelectedRider] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    setLrNumber(e.target.value)
  }

  const handleRiderChange = (value) => {
    setSelectedRider(value)
    setIsOpen(false)
  }

  const toggleScanner = () => {
    console.log('Scanner triggered')
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Run-sheet
        </h1>

        <section className="w-full mb-6">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="lrnumber"
              value={lrNumber}
              onChange={handleChange}
              placeholder="LR Number"
              autoFocus
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md cursor-pointer hover:bg-gray-800"
            />
          </form>
        </section>

        <div className="flex justify-center my-4">
          <FaQrcode
            size={48}
            onClick={toggleScanner}
            className="cursor-pointer text-gray-900 hover:text-gray-700 transition"
          />
        </div>

        <div className="relative w-full">
          <div
            className="flex items-center justify-between p-3 border border-gray-300 rounded-md cursor-pointer bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              <FaUser />
              {selectedRider || 'Select Rider'}
            </div>
            <span className="text-gray-500">▼</span>
          </div>

          {isOpen && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {['Sai', 'Babu', 'Vishnu', 'Sanju'].map((rider) => (
                <div
                  key={rider}
                  className="p-3 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleRiderChange(rider)}
                >
                  {rider}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-md cursor-pointer hover:bg-gray-800 text-xl">
          Select
        </button>
      </div>
    </main>
  )
}

export default CreateRunsheet
