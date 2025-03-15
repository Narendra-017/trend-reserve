import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-950 py-10">
      <div className="mx-auto px-5 flex flex-col md:flex-row justify-around items-center md:items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src="/" alt="ShadowFax" className="w-10 h-10" />
            <h1 className="text-2xl font-semibold">Shadow Fax</h1>
          </div>
          <p className="text-gray-600 mt-3 max-w-[300px] text-lg">
            Achieving a customer-centric logistics model requires strategic
            planning and consistent effort.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mt-3">
          <h2 className="text-lg font-semibold md:mb-3 mb-0 md:mt-0 mt-5 text-gray-500">
            COMPANY
          </h2>
          <div className="flex flex-col space-y-2">
            <Link
              to=""
              className="text-gray-700 hover:text-gray-800 text-lg font-medium"
            >
              About
            </Link>
            <Link
              to=""
              className="text-gray-700 hover:text-gray-800 text-lg font-medium"
            >
              Features
            </Link>
            <Link
              to=""
              className="text-gray-700 hover:text-gray-800 text-lg font-medium"
            >
              Works
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-gray-500 md:mb-3 mb-0 md:mt-0 mt-5">
            HELP
          </h2>
          <div className="flex space-x-4 flex-col justify-center">
            <Link
              to=""
              className="text-gray-600 hover:text-gray-800 text-lg font-medium md:ml-2 ml-3"
            >
              Customer Support
            </Link>
            <Link
              to=""
              className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            >
              Delivery Details
            </Link>
            <Link
              to=""
              className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              to=""
              className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6 pt-6 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} ShadowFax. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
