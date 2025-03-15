import React from 'react'
import LoginInfo from './LoginInfo'
import CreateBookingForm from './CreateBookingForm'

const CreateBooking = () => {
  return (
    <div className="min-h-screen flex items-center gap-10 lg:gap-40 px-5 lg:px-20 flex-col lg:flex-row overflow-y-auto pb-20">
      <LoginInfo />
      <CreateBookingForm />
    </div>
  )
}

export default CreateBooking
