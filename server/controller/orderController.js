const Model = require('../models/order')
class Controller {

    static all(req, res) {
        Model.find({})
            .populate('userId', "email")
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }
    static add(req, res) {
        Model.create({
                payment: req.body.payment,
                tapping: req.body.tapping,
                userId: req.body.userId,
                stateId: req.body.stateId,
                createdAt: new Date()
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }
}
module.exports = Controller