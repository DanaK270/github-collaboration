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
  console.log(req.user)

  let bookData = {
    ...req.body,
    image: req.file.filename,
    seller: req.user._id
  }

  let book = new Book(bookData)

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
    .populate('seller')
    .then((books) => {
      res.render('book/index', { books })
    })
    .catch((err) => {
      console.log(err)
    })
}

// book details
exports.book_show_get = (req, res) => {
  console.log(req.query.id)
  Book.findById(req.query.id)
    .populate('seller')
    .then((book) => {
      res.render('book/detail', { book })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_edit_get = (req, res) => {
  Book.findById(req.query.id)
    .then((book) => {
      res.render('book/edit', { book })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_update_post = (req, res) => {
  const updateData = {
    ...req.body,
    image: req.file ? req.file.filename : req.body.currentImg
  }

  Book.findByIdAndUpdate(req.body.id, updateData)
    .then(() => {
      res.redirect('/book/index')
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_delete_get = (req, res) => {
  Book.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect('/book/index')
    })
    .catch((err) => {
      console.log(err)
    })
}
