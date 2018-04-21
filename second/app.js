var express = require('express');

var app = express();

var port = 4500;

app.get("/",function(req,res){
    res.send("this is home pages")
})

app.get("/books",function(req,res){
    res.send("this is books page for my app lkdmkvlmkfm")
})

app.get("/cars",function(req,res){
    res.send("this is books page for my app lkdmkvlmkfm")
})
app.listen(port,function(err){
    console.log(" server is running on port"+ port)
})




/*
function add(a,b){
    return a+b
}

npm install -g nodemon
*/