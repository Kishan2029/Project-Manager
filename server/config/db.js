const mongoose = require('mongoose')


const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (err) {
        console.log(err)
    }

}

module.exports = connectDB 
