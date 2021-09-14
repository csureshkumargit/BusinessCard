const { date } = require('joi');
const mongoose = require('mongoose');
//import { mongoose } from mongoose;
const Schema = mongoose.Schema;
const businesscardSchema = new Schema(
    {
        memberName: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        companyName: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        phoneNumber: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        altphoneNumber: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        email: {
            type: String,
            min: 6,
            max: 255,
            required: true
        },
        address: {
            type: String,
            min: 6,
            max: 500,
            required: true
        },
        // photo: {
        //     type: String,
        //     required: true
        // },
        photo: {
            data: Buffer,
            type: String,
            required: true
        },
        createdOn: {
            type: Date,
            required: true
        }
    },
    {
        collection: 'businessCardlogo',
        versionKey: false //here
    }

);

module.exports = mongoose.model('businessCardlogo', businesscardSchema, 'businessCardlogo');

