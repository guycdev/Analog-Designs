const express = require('express')
const router = express.Router()

const { test } = require('../controllers/reigster')

router.route("/register")
    .post(test)

module.exports = router