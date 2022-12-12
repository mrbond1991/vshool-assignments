const express = require('express')
const animeWLRouter = express.Router()
const AnimeWishListItem = require('../models/animeWishItem.js')

//Get One
animeWLRouter.get("/:animeWishItemID", (req, res, next) => {
    AnimeWishListItem.find({_id: req.params. animeWishItemID}, (err, foundAnimeWishItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundAnimeWishItem)
    })
})

//Delete One
animeWLRouter.delete("/:animeWishItemID", (req, res, next) => {
    AnimeWishListItem.findOneAndDelete({_id: req.params.animeWishItemID}, (err, deletedAnimeWishItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedAnimeWishItem.title} from the Database.`)
    })
})

//Update One
animeWLRouter.put("/:animeWishItemID", (req, res, next) => {
    AnimeWishListItem.findOneAndUpdate(
        {_id: req.params.animeWishItemID},
        req.body,
        { new: true },
        (err, updatedAnimeWishListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAnimeWishListItem)
        }
    )
})

animeWLRouter.route("/")
    //Get all
    .get((req, res, next) => {
        AnimeWishListItem.find((err, animeWishListItems) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(animeWishListItems)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newAnimeListItem = new AnimeWishListItem(req.body)
        newAnimeListItem.save((err, savedAnimeWishListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedAnimeWishListItem)
        })
    })

module.exports = animeWLRouter