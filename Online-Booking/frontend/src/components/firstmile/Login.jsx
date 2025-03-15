import React from 'react'
import { Link } from 'react-router-dom'
import LoginInfo from './LoginInfo'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around bg-gray-100 p-6 relative">
      <LoginInfo />
      <LoginForm />
      <div className="mt-6 md:absolute md:top-6 md:right-10 w-full flex justify-center md:justify-end">
        <Link
          to="/last-mile-login"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-lg"
        >
          Login to Last Mile
        </Link>
      </div>
    </div>
  )
}

export default Login
