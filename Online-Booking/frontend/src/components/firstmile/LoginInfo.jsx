import React from 'react'

const LoginInfo = () => {
  return (
    <div className="w-full sm:w-[80%] lg:max-w-[40%] bg-gray-900 text-white py-14 px-8 sm:px-10 rounded-xl flex flex-col h-[80%] mt-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        Welcome to our community
      </h1>
      <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-[90%] my-6">
        We care about every worker in our worldwide supply chain. What we will
        not do—and never have done—is stand still or turn a blind eye to
        problems in our supply chain.
      </p>
      <p className="mt-4 text-gray-400 text-lg sm:text-2xl max-w-[90%]">
        Digitization within transport and logistics means seamless service.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-2xl sm:text-3xl my-3">Complete Name</p>
        <p className="text-gray-400 text-lg">Sai, Siddipet Transport Company</p>
      </div>
    </div>
  )
}

export default LoginInfo
