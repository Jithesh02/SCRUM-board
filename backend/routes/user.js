const express = require('express')
const router = express.Router()

const {
    getSignup,
    getLogin
} = require('../controllers/user')

router.route('/signup').post(getSignup)
router.route('/login').post(getLogin)

module.exports = router