const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    hash:{
        type:String,
    }

})

module.exports = mongoose.model('User',userSchema)