const express = require('express')
const multer = require('multer')
const path = require('path')

const upload = multer({ dest: path.join(__dirname, '../public/images/') })

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

//controller
const profileCtrl = require('../controllers/profile')

router.get('/index', profileCtrl.profile_index_get)

module.exports = router
