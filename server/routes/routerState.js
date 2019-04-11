const router = require('express').Router(),
    stateController = require('../controller/stateController'),
    images = require('../helper/images'),
    autentic = require('../midleware/autentic'),
    autorize = require('../midleware/autorize') //admin

router.get('/all', stateController.all)
router.post('/add', stateController.add)
router.delete('/remove/:id', stateController.remove)

module.exports = router