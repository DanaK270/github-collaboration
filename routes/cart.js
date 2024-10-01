const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const ensureLoggedIn = require('../config/ensureLoggedIn')

//controller
const cartCtrl = require('../controllers/cart')

//routes
router.post('/add', ensureLoggedIn, cartCtrl.cart_create_post)
router.get('/index', ensureLoggedIn, cartCtrl.cart_index_get)
router.post('/placeOrder', ensureLoggedIn, cartCtrl.placeOrder_post)
router.post('/edit', ensureLoggedIn, cartCtrl.cart_edit_post)

module.exports = router
