'use strict';

const serviceLocator = require('../../serviceLocator');
const mongoose = serviceLocator.get('mongoose');

const employeeSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        fistName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Employees', employeeSchema);