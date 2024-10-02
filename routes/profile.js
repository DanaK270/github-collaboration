const express = require('express')
const multer = require('multer')
const path = require('path')

const profileController = require('../controllers/profile')
const isAuthenticated = require('../routes/auth')

const upload = multer({ dest: path.join(__dirname, '../public/images/') })

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const ensureLoggedIn = require('../config/ensureLoggedIn')

//controller
const profileCtrl = require('../controllers/profile')

//routes
router.get('/index', ensureLoggedIn, profileCtrl.profile_index_get)
router.get('/edit', ensureLoggedIn, profileCtrl.profile_edit_get)
router.post(
  '/update',
  ensureLoggedIn,
  upload.single('image'),
  profileCtrl.profile_update_post
)
router.get('/detail', profileCtrl.Profile_detail_get)

module.exports = router
