const express = require('express');
const moviesRouter = express.Router();

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

var nav =[
    {link:'/',Text:'Home'},
    {link:'/movies',Text:'Movies'}
]

moviesRouter.route('/')
        .get(function(req,res){
            res.render('Movies',{
                title:'Movies List',
                nav:nav,
            movies:movie})
        })

moviesRouter.route('/:id')
            .get((req,res)=>{
                const id = req.params.id;
                res.render('MoviesDetails',{
                    title:'Detail Page',
                    nav:nav,
                    movies:movie[id]
                })
            })

module.exports = moviesRouter;


/*
function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b };
(a,b) => { return a+b }
*/