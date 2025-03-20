const User = require("../models/user-models");
const Contact = require("../models/contect-model");

const getAllUser = async(req, res)=>{
    try {
        const users = await User.find();
        console.log(users)
        if(!users || users.length === 0){
            return res.status(404).json({message:"NO User, Found"});
        }
        return res.status(200).json(users)
    } catch (error) {
            console.log(error)        
    }
};


const deleteUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({msg:"user delete"})
    } catch (error) {
        console.log(error)   
    }
}

const getAllContact = async(req, res)=>{
    try {
        const contact = await Contact.find();
        console.log(contact)
        if(!contact || contact.length === 0){
            return res.status(404).json({message:"no user found"})
        }
        return res.status(200).json(contact)
    } catch (error) {
        console.log(error)
    }
};

const deletecontactById = async(req, res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({msg:"user deleted"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllUser,getAllContact,deleteUserById,deletecontactById}