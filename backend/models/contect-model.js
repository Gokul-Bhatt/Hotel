const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const CuserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    phone:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    }
})

CuserSchema.methods.generateToken = async function() {
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

const Cuser = new mongoose.model("Cuser",CuserSchema);
module.exports = Cuser;