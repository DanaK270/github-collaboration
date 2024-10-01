const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Profile = require('../models/Profile')

exports.profile_index_get = (req, res) => {
  res.render('profile/index')
}

exports.profile_edit_get = (req, res) => {
  Profile.findById(req.query.id)
    .then((profile) => {
      res.render('profile/edit', { profile })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.profile_update_post = (req, res) => {
  Profile.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect('/profile/index')
    })
    .catch((err) => {
      console.log(err)
    })
}
