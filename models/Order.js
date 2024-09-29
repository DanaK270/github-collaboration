const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    issueDate: Date,
    status: String,
    totalPayment: Number,
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      }
    ],
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
