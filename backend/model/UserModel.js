const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name:"string",
    age: "number",
    email:"string",
})

const UserModel = new mongoose.model('users', Schema)
module.exports = UserModel;

