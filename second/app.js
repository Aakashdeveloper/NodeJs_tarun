var express = require('express');

var app = express();

var port = 4500;

//Use to specifiy static path files
app.use(express.static('public'));
//Use to specifiy view(html)
app.set('views', './src/views');
//Specifiy which template engine use
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    //res.send("this is home pages")'
    res.render('index',{title:'HomePage',nav:[
        {link:'/',Text:'Home'},
        {link:'/books',Text:'Books'},
        {link:'/cars',Text:'Cars'}
    ]})
})

app.get("/books",function(req,res){
    //res.send("this is books page for my app lkdmkvlmkfm")
    res.render('bookList',{title:'BookList',nav:[
        {link:'/',Text:'Home'},
        {link:'/books',Text:'Books'},
        {link:'/cars',Text:'Cars'}
    ]})
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