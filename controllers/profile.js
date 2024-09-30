const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Profile = require('../models/Profile')

exports.profile_index_get = (req, res) => {
  res.render('profile/index')
}
