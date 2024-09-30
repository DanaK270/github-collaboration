const Cart = require('../models/Cart')
const Book = require('../models/Book')

exports.cart_create_post = async (req, res) => {
  try {
    console.log(req.body.id)
    let bookId = req.body.id
    let userId = req.user._id
    const book = await Book.findById(bookId)
    if (!book) {
      return
    }

    let cart = await Cart.findOne({ buyer: userId }, { status: 'active' })
    if (!cart) {
      cart = new Cart({
        status: 'active',
        totalPayment: 0,
        books: [],
        buyer: req.user._id
      })
    }
    cart.totalPayment += book.price
    cart.books.push(bookId)
    await cart.save()
    res.redirect('/cart/index')
  } catch (err) {
    console.log(err)
  }
}
