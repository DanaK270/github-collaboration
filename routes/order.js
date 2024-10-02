const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const ensureLoggedIn = require('../config/ensureLoggedIn')

//controller
const orderCtrl = require('../controllers/order')

//routes
router.get('/index', ensureLoggedIn, orderCtrl.order_index_get)
router.get('/detail', ensureLoggedIn, orderCtrl.order_details_get)

module.exports = router
