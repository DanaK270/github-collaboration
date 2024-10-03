const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
  {
    // issueDate: Date,
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

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
