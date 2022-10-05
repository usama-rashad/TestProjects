const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/userIDs");
mongoose.connection.on("connection",(()=>{
    console.log("DB is connected");
}))
mongoose.connection.on("error",(()=>{
    console.log("DB is not connected");
}))

let userIDSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber : String,
    idCardNumber : String
})

let userIDsModel = mongoose.model('userid',userIDSchema);

// Return list of members with name "Usama"
let results = userIDsModel.find({"name":"usama"},(()=>{
    console.log(results);
}));

