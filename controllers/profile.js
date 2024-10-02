const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const User = require('../models/User')
const Book = require('../models/Book')

exports.profile_index_get = (req, res) => {
  res.render('profile/index')
}

exports.Profile_detail_get = (req, res) => {
  try {
    let userId = req.user._id
    Book.find({ seller: userId })
      .then((books) => {
        res.render('profile/detail', { books, dayjs })
      })
      .catch((err) => {
        console.log(err)
      })

    // const user = await User.findById(req.user._id).populate('books');

    // if (!user) {
    //   return res.status(404).send('User not found');
    // }

    // res.render('profile/detail', { user, books: user.books, dayjs });
  } catch (err) {
    console.error('Error fetching user or books:', err)
    res.redirect('/')
  }
}

exports.profile_edit_get = (req, res) => {
  User.findById(req.query.id)
    .then((profile) => {
      res.render('profile/edit', { profile })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.profile_update_post = (req, res) => {
  if (req.file) {
    req.body.image = req.file.filename
  }

  console.log(req.body.id)
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(() => {
      res.redirect('/profile/index')
    })
    .catch((err) => {
      console.log(err)
    })
}
