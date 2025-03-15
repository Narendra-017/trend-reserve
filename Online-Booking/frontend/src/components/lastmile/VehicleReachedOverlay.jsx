import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'

const VehicleReachedOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-bold text-gray-900">
          🚚 Vehicle Reached Safely
        </h2>

        <div className="my-4 flex justify-center w-full overflow-hidden">
          <FaTruckMoving className="text-6xl text-gray-900 animate-truck" />
        </div>

        <p className="text-gray-700">
          The vehicle has successfully arrived at the destination. You may now
          proceed with the next steps.
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default VehicleReachedOverlay
