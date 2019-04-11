const Model = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('../helper/jwt')

const axios = require('axios')

class Controller {
    static create(req, res) {
        console.log(req.body);

        Model.create({
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                nationality: req.body.nationality
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


    static login(req, res) {

        if (req.body.email == undefined || req.body.password == undefined) {
            // console.log('ooooo');
            res.json(500, {
                error: "wrong email/password"
            });

        } else {
            Model.findOne({
                    email: req.body.email
                })
                .then(function (user) {
                    // console.log('masok login');

                    let validasi = bcrypt.compareSync(req.body.password, user.password);
                    if (validasi == false) {
                        res.status(400).json({
                            message: 'Wrong Email/Password'
                        })
                    } else {
                        let token = jwt.sign({
                            email: user.email
                        })
                        res.status(200).json({
                            token,
                            role: user.role
                        })
                    }

                })
                .catch(function (err) {
                    res.status(500).json({
                        messege: err.message
                    })
                })
        }
    }
}

module.exports = Controller