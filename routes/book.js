const express = require('express')
const multer = require('multer')
const path = require('path')

const upload = multer({ dest: path.join(__dirname, '../public/images/') })

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const ensureLoggedIn = require('../config/ensureLoggedIn')

//controller
const bookCtrl = require('../controllers/book')

//routes
router.get('/add', ensureLoggedIn, bookCtrl.book_create_get)
router.post(
  '/add',
  upload.single('image'),
  ensureLoggedIn,
  bookCtrl.book_create_post
)
router.get('/index', bookCtrl.book_index_get)
router.get('/detail', bookCtrl.book_show_get)
router.get('/edit', ensureLoggedIn, bookCtrl.book_edit_get)
router.post(
  '/update',
  ensureLoggedIn,
  upload.single('image'),
  bookCtrl.book_update_post
)
router.get('/delete', ensureLoggedIn, bookCtrl.book_delete_get)

module.exports = router
