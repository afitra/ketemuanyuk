const Model = require('../models/state')
const jwt = require('../helper/jwt')
class Controller {

    static recomended(req, res) {


        Model.aggregate([{
                $sort: {
                    rating: -1
                }
            }])
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json({
                    message: 'internal servel error'
                })
            })


    }
    // static edit(req, res) {

    //     Model.findOneAndUpdate({
    //             _id: req.params.id
    //         }, {
    //             url: 'https://cdn.jitunews.com/dynamic/thumb/2016/04/3260eff33bd19428e279f2134190ac82_630x420_thumb.jpg?w=630',
    //         }, {
    //             new: true
    //         })
    //         .then(data => {
    //             res.status(200).json(data)
    //             console.log(data);

    //         })

    //         .catch(function (err) {
    //             res.status(500).json({
    //                 messege: err.message
    //             })
    //         })
    // }

    static add(req, res) {
        // console.log('controller============');
        // console.log(req.body.price);

        if (req.body.tag == undefined) {
            res.status(500).json({
                messege: 'location  harus di isi'
            })
        } else {

            Model.create({
                    name: req.body.name,
                    capacity: req.body.capacity,
                    tag: req.body.tag,
                    price: req.body.price,
                    createdAt: new Date(),
                    url: req.body.url,
                    rating: req.body.rating
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


    static remove(req, res) {
        Model.findByIdAndDelete(req.params.id)
            .then(function (data) {
                res.status(200).json(data)
                console.log(data);

            })
            .catch(function (err) {
                res.status(500).json({
                    messege: err.message
                })
            })
    }
    static all(req, res) {
        Model.find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }




}
module.exports = Controller