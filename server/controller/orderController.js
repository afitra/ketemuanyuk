const Model = require('../models/order')
const User = require('../models/user')
const State = require('../models/state')
const jwt = require('../helper/jwt')
class Controller {


    static search(req, res) {
        // console.log(req.body.search);

        State.find({
                tag: {
                    $all: [req.body.search]
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }

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
        console.log(req.headers.token);
        console.log(req.body.payment);
        var ID = ''
        var validation = jwt.verify(req.headers.token)
        State.find({
                _id: req.body.stateId
            })
            .then(data => {
                console.log(data);
                if (data.capaciti < req.body.tapping) {
                    res.status(500).json({
                        messege: "Sorry over load capacity"
                    })
                } else {
                    return User.findOne({
                        email: validation.email
                    })
                }
            })
            .then(data => {
                console.log('berhasilxxxxxxxxx');
                ID = data._id
                return Model.create({
                    payment: Number(req.body.payment),
                    tapping: Number(req.body.tapping),
                    userId: ID,
                    stateId: req.body.stateId,
                    createdAt: new Date()
                })
            })
            .then(data => {
                res.status(201).json(data)
                console.log(data);
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }
}
module.exports = Controller