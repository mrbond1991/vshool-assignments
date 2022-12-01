const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author.js')

authorRouter.route('/')
    // Get all authors
    .get((req, res, next) => {
        Author.find((err, authors) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(authors)
        })
    })

    //Get author(s) by search term
    authorRouter.get("/search", (req, res, next) => {
        const { author } = req.query
        const pattern = new RegExp(author)
        Author.find(
            { name: { $regex: pattern, $options: 'i'} },
            (err, authors) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(authors)
        })
    })

    // Add new author
    .post((req, res, next) => {
        const newAuthor = new Author(req.body)
        newAuthor.save((err, savedAuthor) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedAuthor)
        })
    })

    module.exports = authorRouter