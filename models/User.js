const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
