const mongoose = require('mongoose');

const URI = process.env.URI;

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