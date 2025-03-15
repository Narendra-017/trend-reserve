import React, { useState } from 'react'
import VehicleReachedOverlay from './VehicleReachedOverlay'
import LastMileSidebar from './LastMileSidebar'

const Receive = () => {
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [message, setMessage] = useState('')
  const [showOverlay, setShowOverlay] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/

    if (!vehicleRegex.test(vehicleNumber)) {
      setError('Invalid vehicle number format. Use TS09CX1234.')
      setMessage('')
      return
    }

    setError('')
    setMessage('✅ Vehicle number verified!')
    setShowOverlay(true)
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <LastMileSidebar />
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Receive Vehicle
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="TS09CX1234"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md cursor-pointer hover:bg-gray-800 transition"
            >
              Verify Vehicle
            </button>
          </form>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
          {message && <p className="text-green-600 text-sm mt-4">{message}</p>}
        </div>

        {showOverlay && (
          <VehicleReachedOverlay onClose={() => setShowOverlay(false)} />
        )}
      </main>
    </div>
  )
}

export default Receive
