// Load Dependencies
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

const db = require('./config/db')

// Listen for all HTTP Requests on PORT 4000
app.listen(PORT, () => {
  console.log(`Recipe App is running on PORT ${PORT}`)
})
