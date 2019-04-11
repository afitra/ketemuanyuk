const router = require('express').Router(),
    orderController = require('../controller/orderController'),
    images = require('../helper/images'),
    autentic = require('../midleware/autentic'),
    autorize = require('../midleware/autorize') //admin

router.get('/all', orderController.all)
router.post('/add', orderController.add)

module.exports = router