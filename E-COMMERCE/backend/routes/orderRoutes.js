const express = require('express')
const Order = require('../models/Order')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/my-orders', protect, async (req, res) => {
  try {
    console.log('User from protect middleware:', req.user) // Debug log

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized - No user data' })
    }

    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    })

    res.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ message: 'Server Error' })
  }
})

router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    )
    if (!order) {
      return res.status(404).json({ message: 'Order Not Found' })
    }

    res.json(order)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})
module.exports = router
