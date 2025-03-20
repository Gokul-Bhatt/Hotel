const express = require('express');
const User = require("../models/user-models");
const Cuser = require("../models/contect-model");


const home = async(req, res)=>{
    try {
        res.status(200).send("using controllers.....")
    } catch (error) {
        console.log(error)
    }
};

const register = async(req, res)=>{
    try {
        console.log(req.body)
        const {username, phone,bed,checkin, checkout} = req.body;
        const userCreated = await User.create({username,phone,bed,checkin,checkout});
        res.status(201).json({msg:userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(),})
    } catch (error) {
        res.status(500).json(error)
    }
};

const contact = async(req, res)=>{
    try {
        console.log(req.body)
        const {username, phone, message } = req.body;
        const ContactuserCreated = await Cuser.create({username, phone, message});
        res.status(201).send({msg: ContactuserCreated, token: await ContactuserCreated.generateToken(),userId: ContactuserCreated._id.toString(),})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {home,register,contact}
