let express = require('express')
let router = express.Router()
let currencyRouter = require('./currency')

router.use('/currency', currencyRouter)

module.exports = router
