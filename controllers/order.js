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
