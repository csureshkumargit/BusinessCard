const mongoose = require('mongoose');
//import { mongoose } from mongoose;
const Schema = mongoose.Schema;
const userRegistartionSchema = new Schema(
    {
        username: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'userRegister',
        versionKey: false //here
    }

);

module.exports = mongoose.model('userRegister', userRegistartionSchema, 'userRegister');

