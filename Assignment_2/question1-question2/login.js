const express = require('express')
const index = express();
const mongoose = require('mongoose');
const session = require('express-session')


mongoose.connect('mongodb://localhost/mylib', { useNewUrlParser: true, useUnifiedTopology: true }, err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const UserModel = mongoose.model('urs', userSchema)

index.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialised: true
}))

index.use(express.urlencoded({ extended: true }));

index.get('/', (req, res) => {
    res.sendFile(__dirname + '/practical2.html')
});

index.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {
        UserModel.findOne({ email: req.body.username }).then(result => {

            if (result.email) {
                if (result.password == req.body.password) {
                    req.session.loggedin = true
                    req.session.username = req.body.username
                    res.redirect('/home');
                }
                else {
                    res.send("Password is wrong");
                }
            }
            else {
                res.send("Please check your username and password");
            }
        })
    }
})

index.get('/home', (req, res) => {
    if (req.session.loggedin) {
        res.send("Welcome " +
            req.session.username +
            "<br>" + req.session.id
            + "!!!" +
            "<br><a href='./logout'>Logout</a>");
    }
    else {
        res.redirect('/');
    }
})

index.get('/logout', (req, res) => {
    if (req.session.loggedin) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return next(err)
                }
                else {
                    res.clearCookie("connect.sid")
                    res.redirect('/');
                }
            })
        }
    }
})

index.listen(5000);
