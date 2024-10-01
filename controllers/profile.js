const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const User = require('../models/User')

exports.profile_index_get = (req, res) => {
  res.render('profile/index')
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
  console.log(req.body.id)
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(() => {
      res.redirect('/profile/index')
    })
    .catch((err) => {
      console.log(err)
    })
}
