const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     //공백 제거
        unique: 1
    },
    password: {
        type: String,
        maxlength: 10
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {         //관리자, 일반유저 구분
        type: Number,       //관리자: 1, 유저: 0
        default: 0
    },
    image : String,
    token: {        //유효성
        type: String
    },
    tokenExp: {     //token 사용기간  
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }