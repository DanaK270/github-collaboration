const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Book = require('../models/Book')
// const Order = require('../models/Order')

// add books - GET REQUEST (to display the form for the user to add a book)
exports.book_create_get = (req, res) => {
  res.render('book/add')
}

// add book - POST REQUEST
exports.book_create_post = (req, res) => {
  console.log('BOOK CREATE: ', req.body)
  console.log(req.file)
  let book = new Book(req.body)

  book
    .save()
    .then(() => {
      res.redirect('/book/index')
    })
    .catch((err) => {
      console.log(err)
    })
}

// get books
exports.book_index_get = (req, res) => {
  Book.find()
    .then((books) => {
      res.render('book/index', { books })
    })
    .catch((err) => {
      console.log(err)
    })
}
