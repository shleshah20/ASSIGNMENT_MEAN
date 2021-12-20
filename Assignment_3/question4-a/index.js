const express = require('express')
const req = require('express/lib/request')
const index = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mylib',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>console.log(err))

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    qty:Number
})

const ProductModel = mongoose.model('products',productSchema)

index.use(express.json())
index.use(cors())
index.get('/display',(req,res)=>{
    ProductModel.find({}).then(result=>{
        return res.status(200).json(result)
    }).catch(err=>{
        return res.status(200).json(err)
    })
})

index.get('/display/:id',(req,res)=>{
    ProductModel.find({_id:req.params.id}).then(result=>{
        return res.status(200).json(result)
    }).catch(err=>{
        return res.status(400).json(err)
    })
})

index.post('/insert',(req,res)=>{
    console.log(req.body);
    const data = new ProductModel({
        name:req.body.name,
        price:req.body.price,
        qty:req.body.qty
    })

    data.save().then(result=>{
        return res.status(200).json(result)
    }).catch(err=>{
        return res.status(400).json(err)
    })
})

index.put('/update/:id',(req,res)=>{
    ProductModel.updateOne({_id:req.params.id},{
        $set:{
            name:req.body.name,
            price:req.body.price,
            qty:req.body.qty
        }
    },(err,data)=>{
        if(err) return res.status(400).json(err)
        else return res.status(200).json(data)
    })
})

index.delete('/delete/:id',(req,res)=>{
    ProductModel.deleteOne({_id:req.params.id}).then(result=>{
        return res.status(200).json(result)
    }).catch(err=>{
        return res.status(400).json(err)
    })
})

index.listen(5000)