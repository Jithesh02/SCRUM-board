const User = require('../models/user')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()


const getSignup = (req,res) => {
    const {username,password} = req.body
    User.findOne({username})
    .then(user => {
        if(user){
            return res.status(400).json({code:400,response:'User already present'})
        }
        bcrypt.genSalt(5)
        .then(salt => bcrypt.hash(password,salt))
        .then(hashpassword => new User({username,hashpassword}).save())
        .then(newUser => {
            newUser = newUser.toObject()
            delete newUser['hash']
            const token = jwt.sign({
                data:newUser,
            })
            res.status(201).json({
                code:200,
                response:{
                    token,
                    ...newUser
                }
            })
        })
        .catch(e => res.status(500).json({error:`There is an error ${e}`}))
    })
    .catch(e => res.status(500).json('There has been an error'))
}

const getLogin = (req,res) => {
    const {username,password} = req.body
    User.findOne({username})
    .then(user => {
        if(!user){
            return res.status(400).json({code:404,response:'User not found'})
        }
    bcrypt.compare(password,user.hash)
    .then(success => !success ? res.status(403).json({code:403,response:'invalid password'}) : user)
    .then(user => {
        const token = jwt.sign({
            data:user
        })
        user = user.toObject(),
        delete user['hash']
        res.status(200).json({
            code:200,
            response:{
                token,
                ...user
            }
        })
    })
    .catch(e => res.status(500).json({response:`there is an error ${e}`}))
    })
    .catch(e => res.status(500).json({response:`there is an error ${e}`}))
}

module.exports = {
    getLogin,
    getSignup
}