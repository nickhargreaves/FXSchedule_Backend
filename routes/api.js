var express = require('express');
var router = express.Router();

router.route('/posts')

    //returns all posts
    .get(function(req, res){

        //temporary solution
        res.send({message: 'TODO return all posts'})
    })

    .post(function(req, res){

        //temporary solution
        res.send({message: 'TODO Create a new post'})
    });

router.route('posts/:id')

    //return specified post
    .get(function(req, res){

        res.send({message: 'return post with id' + req.params.id})

    })

    //update existing post
    .put(function(req, res){

        res.send({message: 'TODO modify post with id' + req.params.id})

    })

    //update existing post
    .delete(function(req, res){

        res.send({message: 'TODO delete post with id' + req.params.id})

    })

module.exports = router;