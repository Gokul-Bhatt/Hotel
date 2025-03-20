const jwt = require("jsonwebtoken");
const User = require("../backend/models/user-models");

const authMiddleware = async(req, res, next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json("token not provided");
    }
    const jwtToken = token.replace('Bearer',"").trim();
    try {
        const isVerfied = jwt.verify(jwtToken, process.env.JWT_KEY);
        const userData = await User.findOne({phone: isVerfied.phone});
        req.user = userData;
        req.token = token;
        req.ID = userData._id;
        next();
    } catch (error) {
        return res.status(401).json(error)
    }
}

module.exports = authMiddleware;