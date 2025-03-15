import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/common/Home'
import Login from './components/firstmile/Login'
import LastMileLogin from './components/lastmile/LastMileLogin'
import BookingPage from './pages/BookingPage'
import CreateBooking from './components/firstmile/CreateBooking'
import Basket from './components/firstmile/Basket'
import BasketPage from './components/firstmile/BasketPage'
import Dashboard from './components/lastmile/Dashboard'
import CreateRunsheet from './components/lastmile/CreateRunsheet'
import Receive from './components/lastmile/Receive'
import RiderActivity from './components/lastmile/RiderActivity'
import CloseRunsheet from './components/lastmile/CloseRunsheet'
import PendingOrders from './components/lastmile/PendingOrders'
import { Toaster } from 'sonner'
function App() {
  const location = useLocation()
  const showNavbar = location.pathname === "/"
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position='top-right' richColors />
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* First Mile Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/first-mile-login" element={<Login />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/createbooking" element={<CreateBooking />} />
          <Route path="/basketpage" element={<Basket />} />
          <Route path="/basket" element={<BasketPage />} />

          {/* Last Mile Routes */}
          <Route path="/last-mile-login" element={<LastMileLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-runsheet" element={<CreateRunsheet />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/rider-activity" element={<RiderActivity />} />
          <Route path="/close-runsheet" element={<CloseRunsheet />} />
          <Route path='/pending-orders' element={<PendingOrders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
