const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const User = require('../models/User');
const Book = require('../models/Book');



 
exports.profile_index_get = (req, res) => {
  res.render('profile/index');
};

exports.Profile_detail_get =  (req, res) => {
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
    console.error('Error fetching user or books:', err);
    res.redirect('/'); 
  }
};
