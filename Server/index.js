const express= require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config ({path:'./config.env'})
require('./Database/DBconnection.js')
const User = require('./Models/userSchema.js')


const Middleware = (req,res,next)=>{

    console.log("Pls Log in First!!!!");
    next();
}
app.use(express.json());
app.use(require('./Routers/Routing.js'));


app.listen(process.env.PORT,()=>{
    console.log("Server is running on Port :",process.env.PORT)
})