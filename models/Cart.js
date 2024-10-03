const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
  {
    // issueDate: Date,
    status: String,
    totalPayment: Number,
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        quantity: {
          type: Number,
          default: 1
        }
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
