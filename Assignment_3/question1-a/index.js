const express = require('express')
const index = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const session = require('express-session')

index.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

index.use(express.json())

mongoose.connect('mongodb://localhost/mylib',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err)
})

const empSchema = mongoose.Schema({
    name:String,
    address:String,
    email:String,
    password:String
})

const EmpModel = mongoose.model('emps',empSchema)

const check = (req,res,next)=>{
    if(req.session.loggedin)
    {
        if(req.session.token)
        {
            jwt.verify(req.session.token,'shhhh',function(err,data){
                if(err) res.status(400).json(err)
                else next() 
            })
        }
        else
        {
            return res.status(400).json("you are not authenticate")    
        }
    }
    else
    {
        return res.status(400).json("you are not authenticate")
    }
}

index.post('/login',(req,res)=>{
    EmpModel.findOne({email:req.body.email,password:req.body.password}).then(result=>{
        var token = jwt.sign({user:result},'shhhh')
        req.session.loggedin=true
        req.session.token = token
        return res.status(200).json(token)
    }).catch(err=>{
        return res.status(400).json(200)
    })
})

index.get('/display',check,(req,res)=>{
    EmpModel.find({}).then(result=>{
        return res.status(200).json(result)
    }).catch(err=>{
        return res.status(400).json(err)
    })
})

index.listen(5000)