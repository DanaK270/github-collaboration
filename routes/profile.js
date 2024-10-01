const express = require('express')
const multer = require('multer')
const path = require('path')

const profileController = require('../controllers/profile');
const isAuthenticated = require('../routes/auth')

const upload = multer({ dest: path.join(__dirname, '../public/images/') })

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

//controller
const profileCtrl = require('../controllers/profile')

router.get('/index', isAuthenticated, profileCtrl.profile_index_get)
router.get('/detail', isAuthenticated, profileCtrl.Profile_detail_get);


module.exports = router
