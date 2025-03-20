const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    phone:{
        type:String,
        require:true,
    },
    bed:{
        type:String,
        require:true
    },
    checkin:{
        type:String,
        require:true,
    },
    checkout:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:false,
    }
    
})
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            phone: this.phone,
            isAdmin: this.isAdmin
        },
        process.env.JWT_KEY,
        {
            expiresIn:'30d'
        }
    );
    } catch (error) {
      console.log("error")  
    }
}

const User = new mongoose.model("User",userSchema);
module.exports = User;