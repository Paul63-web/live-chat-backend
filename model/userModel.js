const express = require('express');

const { connection } = require('../prepared/connection');

const bcrypt = require('bcrypt');

const app = express();

connection();

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobilenumber: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    profilePicture: {
        type: String,
        default:""
    },

    friends: {
        type: Array,
        required: true,
        select: false
    },

    messages: {
        type: Array,
        required: true,
        select: false
    },

    notifications: {
        type: Array,
        required: true,
        select: false
    },

    friend_requests: {
        type: Array,
        required: true,
        select: false
    }
}, {timestamps: true});

userSchema.pre('save', async function ( next ) {
    
    let salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = { User };