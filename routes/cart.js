const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const ensureLoggedIn = require('../config/ensureLoggedIn')

//controller
const cartCtrl = require('../controllers/cart')

//routes
router.post('/add', ensureLoggedIn, cartCtrl.cart_create_post)

module.exports = router
