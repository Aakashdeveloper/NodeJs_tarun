var express = require('express');

var app = express();

var port = 4500;

//Use to specifiy static path files
app.use(express.static('public'));
//Use to specifiy view(html)
app.set('views', './src/views');
//Specifiy which template engine use
app.set('view engine', 'ejs');

var moviesRouter = express.Router();
var AlbumsRouter = express.Router()
var movie =[
    {
        name: "Black Panther",
        language: "ENGLISH",
        rate: 4.5,
        type: "Action Adventure Fantasy",
        imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
        name: "Death Wish",
        language: "ENGLISH",
        type: "Action Crime Thriller",
        rate: 3.2,
        imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
        name: "Coco",
        language: "ENGLISH",
        type: "Adventure Animation Family",
        rate: 5,
        imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg"
    },
    {
        name: "Pari",
        language: "HINDI",
        rate: 2.5,
        type: "Horror Thriller",
        imageUrl: "https://image.ibb.co/fgmbuc/pari.jpg"
    },
    {
        name: "Pad Man",
        language: "HINDI",
        type: "Biography Drama",
        rate: 4,
        imageUrl: "https://image.ibb.co/hX087x/pad.jpg"
    },
    {
        name: "Aiyaary",
        language: "HINDI",
        type: "Action Drama",
        rate: 3.5,
        imageUrl: "https://image.ibb.co/iQxzEc/a.jpg"
    },
    {
        name: "Veerey Ki Wedding",
        language: "HINDI",
        type: "Comedy Romance",
        rate: 2,
        imageUrl: "https://image.ibb.co/c2Tvnx/vw.jpg"
    },
    {
        name: "Black Friday",
        language: "ENGLISH",
        rate: 4.5,
        type: "Action Adventure Fantasy",
        imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
    }
]

moviesRouter.route('/')
        .get(function(req,res){
            res.render('index',{title:'Movies List',nav:[
                {link:'/',Text:'Home'},
                {link:'/details',Text:'Books'},
                {link:'/cars',Text:'Cars'}
            ],
            movies:movie})
        })

moviesRouter.route('/details')
            .get(function(req,res){
                res.send("movies details")
            })
            
AlbumsRouter.route('/')
        .get(function(req,res){
            res.render('index',{title:'Movies List',nav:[
                {link:'/',Text:'Home'},
                {link:'/details',Text:'Books'},
                {link:'/cars',Text:'Cars'}
            ],
            movies:movie})
        })   
AlbumsRouter.route('/details')
            .get(function(req,res){
                res.send("movies details")
            })    
/*app.get("/",function(req,res){
    //res.send("this is home pages")'
    res.render('index',{title:'Movies List',nav:[
        {link:'/',Text:'Home'},
        {link:'/details',Text:'Books'},
        {link:'/cars',Text:'Cars'}
        ],
        movies:movie})
})*/

app.get("/details",function(req,res){
    //res.send("this is books page for my app lkdmkvlmkfm")
    res.render('MoviesList',{title:'MoviesList',nav:[
        {link:'/',Text:'Home'},
        {link:'/books',Text:'Books'},
        {link:'/cars',Text:'Cars'}
    ]})
})

app.get("/cars",function(req,res){
    res.send("this is books page for my app lkdmkvlmkfm")
})

app.get("/details",function(req,res){
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