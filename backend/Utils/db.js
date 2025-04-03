const mongoose = require('mongoose');


const URI = "mongodb+srv://gokul:Gokul9012@cluster0.8wxcaym.mongodb.net/Hotel?retryWrites=true&w=majority&appName=Cluster0"
// const URI = process.env.URI;

const conectdp = async()=>{
    try {
        await mongoose.connect(URI);
        console.log('db is connected')
    } catch (error) {
        console.error("db connection fail")
        process.exit(0)
    }
}

module.exports = conectdp;