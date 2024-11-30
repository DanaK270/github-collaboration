const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    condition: String,
    image: String,
    category: String,
    quantity: {
      type: Number,
      default: 1
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
