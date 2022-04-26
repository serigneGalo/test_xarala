const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)   .then(()=> console.log("connected to DataBase"))
    .catch((err)=> console.log("connection failed error: "+err))