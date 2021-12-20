const express = require('express');
const index = express();
const fs = require('fs');

index.get('/',function(req,res){
    res.sendFile(__dirname + "/showVideo.html")
})
index.get('/video',function(req,res){
    res.sendFile(__dirname + "/Video/_Soch_Hardy_Sandhu__Full_Video_Song___Romantic_Punjabi_Song_2013.mp4");
})

index.listen(5000);