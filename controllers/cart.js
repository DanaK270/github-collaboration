const Cart = require('../models/Cart')
const Book = require('../models/Book')
const Order = require('../models/Order')

exports.cart_create_post = async (req, res) => {
  try {
    console.log(req.body.id)
    let bookId = req.body.id
    let userId = req.user._id
    const book = await Book.findById(bookId)
    if (!book) {
      return
    }

    let cart = await Cart.findOne({ buyer: userId, status: 'active' })
    if (!cart) {
      cart = new Cart({
        status: 'active',
        totalPayment: 0,
        books: [],
        buyer: req.user._id
      })
    }
    cart.totalPayment += book.price
    if (Book.find(book.id)) {
      book.quantity += 1
    } else {
      cart.books.push(book)
    }
    await cart.save()
    res.redirect('/cart/index')
  } catch (err) {
    console.log(err)
  }
}

exports.cart_index_get = (req, res) => {
  let userId = req.user._id
  Cart.findOne({ buyer: userId, status: 'active' })
    .populate('books')
    .then((cart) => {
      res.render('cart/index', { cart })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.placeOrder_post = async (req, res) => {
  let userId = req.user._id
  try {
    const cart = await Cart.findOne({ buyer: userId, status: 'active' })
    if (!cart || cart.books.length === 0) {
      res.redirect('/cart/index')
    }

    const order = new Order({
      status: 'processed',
      totalPayment: cart.totalPayment,
      books: [...cart.books], //i should find a way to save the current price not refernece it from Book model but this is fine for now
      buyer: cart.buyer
    })

    await order.save()
    await Cart.findOneAndUpdate(
      { buyer: req.user._id, status: 'active' },
      { status: 'processed' }
    )
    res.redirect('/cart/index')
  } catch (err) {
    console.log(err)
  }
}

//to remove items from cart
exports.cart_edit_post = async (req, res) => {
  try {
    const bookId = req.body.itemId

    const book = await Book.findById(bookId)
    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    const cart = await Cart.findOne({ buyer: req.user._id, status: 'active' })
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' })
    }

    const newPay = cart.totalPayment - book.price

    await Cart.findOneAndUpdate(
      { buyer: req.user._id, status: 'active' },
      {
        $pull: { books: bookId },
        totalPayment: newPay
      },
      { new: true }
    )

    res.redirect('/cart/index')
  } catch (err) {
    console.log(err)
  }
}
