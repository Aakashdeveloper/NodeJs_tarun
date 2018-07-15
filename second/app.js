var express = require('express');
const chalk = require('chalk');
var app = express();

var port = 4500;

//Use to specifiy static path files
app.use(express.static('public'));
//Use to specifiy view(html)
app.set('views', './src/views');
//Specifiy which template engine use
app.set('view engine', 'ejs');

var moviesRouter = require('./src/routes/moviesRouter');

var nav =[
    {link:'/',Text:'Home'},
    {link:'/movies',Text:'Movies'}
]
           
app.get("/",function(req,res){
    //res.send("this is home pages")'
    res.render('home',{
        title:'HomePage',
        nav:nav})
})
app.use('/movies',moviesRouter)


app.listen(port,function(err){
    console.log(`server is running on port ${chalk.green(port)}`)
})


/*var a =10
var b = "my age is "+a;
`my age is ${a}`
*/