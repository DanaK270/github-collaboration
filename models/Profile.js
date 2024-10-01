const mongoose = require('mongoose')

const profileSchema = mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: String,
    email: String,
    image: String,
    number: String
  },
  { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
