const mongoose = require('mongoose');
const dotenv = require('dotenv');


const ConnectionString = process.env.DbString;

mongoose.connect(ConnectionString).then(()=>{
    console.log("Database Connection Successfull!");
}).catch((err)=>{
    console.log("NO connection!",err);
});
