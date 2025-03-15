import React from 'react'
import { Link } from 'react-router-dom'

const gridItems = [
  {
    logo: '🚀',
    name: 'Support',
    description: '24/7 customer support for all queries and issues.',
  },
  {
    logo: '📈',
    name: 'Sales',
    description: 'Boost your business with our sales-driven strategies.',
  },
  {
    logo: '🎯',
    name: 'OnBoarding',
    description: 'Seamless onboarding process for new users.',
  },
  {
    logo: '📦',
    name: 'Product',
    description: 'Reliable and high-quality logistics services.',
  },
  {
    logo: '✅',
    name: 'Quality',
    description: 'Delivering excellence with top-notch standards.',
  },
  {
    logo: '🏆',
    name: 'Result',
    description: 'Guaranteed positive outcomes with our services.',
  },
]

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center px-4 md:my-10">
        <h1 className="md:text-7xl text-center mx-auto font-semibold -tracking-tight leading-tight md:max-w-[80%] text-3xl mt-5">
          Fast & Trusted Transportation Service.
        </h1>
        <p className="text-2xl text-gray-500 font-medium max-w-2xl my-8">
          Experience seamless logistics and efficient delivery services tailored
          to your needs.
        </p>
        <Link
          to="/first-mile-login"
          className="text-xl font-semibold tracking-tight bg-gray-950 text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition mt-3"
        >
          Get Started
        </Link>
      </div>
      <div className="my-10 flex items-center justify-center">
        <img
          src="/HeroPageimage.jpg"
          alt="Shopping Cart"
          className="md:max-w-[70%] max-w-[90%] rounded-3xl"
        />
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-medium my-5">
          Make every step user-centric
        </h2>
        <p className="text-gray-500 text-lg mb-5">
          Our solutions are designed with the customers in mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[80%] px-4">
        {gridItems.map((item, index) => (
          <div key={index} className="p-6 text-center space-x-5 my-5">
            <h1 className="text-5xl">{item.logo}</h1>
            <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600 mt-2 max-w-xs text-lg font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
