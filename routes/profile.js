const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const upload = multer({ dest: path.join(__dirname, '../public/images/') })

const ensureLoggedIn = require('../config/ensureLoggedIn')

router.use(express.urlencoded({ extended: true }))

//controller
const profileCtrl = require('../controllers/profile')

//routes
router.get('/index', profileCtrl.profile_index_get)
router.get('/edit', profileCtrl.profile_edit_get)
router.post('/update', profileCtrl.profile_update_post)

module.exports = router
