const Order = require('../models/Order')
const dayjs = require('dayjs')

exports.order_index_get = (req, res) => {
  let userId = req.user._id
  Order.find({ buyer: userId })
    .populate('books')
    .then((orders) => {
      res.render('order/index', { orders, dayjs })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.order_details_get = (req, res) => {
  Order.findById(req.query.id)
    .then((order) => {
      console.log('order', order)
      res.render('order/orderDetails', { order, dayjs })
    })
    .catch((err) => {
      console.log(err)
    })
}
