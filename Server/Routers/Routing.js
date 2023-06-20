const express = require('express');
const router = express.Router();
require('../Database/DBconnection')
const User = require("../Models/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Middleware = (req, res, next) => {

    console.log("pls log in first");
    next();
}
router.get('/', (req, res) => {
    res.send('Hello World From This Server !!!!');
})


router.get('/about', Middleware, (req, res) => {
    res.send('Hello From About Page');
})






router.get('/contact', (req, res) => {
    res.send("Hello From Contact Page");
})







router.post("/login", (req, res) => {
    console.log("Login Successfull!");
    const { email, password } = req.body;
    console.log(email,password);

    if (!email || !password) {

        res.status(422).send("pllz please all required field!")
    }
    User.findOne({ email: email }).then(async (user) => {
        console.log(user);
        const result = await bcrypt.compare(password, user.password);
        const token = await user.generateAuthToken();


        if (!result) {
            res.status(404).send("Invalid Credentials!")
        } else {
            // res.cookie("jwtoken", token)({
            //     expires: new Date(Date.now() + 25892000),
            //     httpOnly: true
            // });
            res.status(201).send({
                "token":token
            });
        }

    }).catch(() => {
        res.status(404).send("No Singer Found!")
    })
})












router.post('/signup', (req, res) => {
    console.log(req.body);
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {

        res.status(422).send("pllz please all required field!");
    }
    else if (password != cpassword) {
        console.log(password, cpassword);
        res.status(422).send("Cpassword must be same as Password!");
    }
    else {
        User.findOne({ email: email }).then((userExist) => {
            console.log(userExist);
            if (userExist) {
                return res.status(422).send("User Alread Exist!");
            }
            const user = new User({ name, email, phone, work, password, cpassword });
 
            user.save().then(() => {
                res.status(201).send("User Signed Up Rockssss!!!!!!!!")
            }).catch((errr) => {
                res.status(500).send("Failed to Sign up!")
            })
        }).catch(err => { res.status(500).send(err) })
    }



})
module.exports = router;