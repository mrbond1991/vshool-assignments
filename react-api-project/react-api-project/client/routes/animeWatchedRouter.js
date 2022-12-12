const express = require('express')
const animeWatchedRouter = express.Router()
const AnimeListItem = require('../models/animeListItem.js')

//Get One
animeWatchedRouter.get("/:animeWatchedItemID", (req, res, next) => {
    AnimeListItem.find({_id: req.params. animeWatchedItemID}, (err, foundAnimeWatchedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundAnimeWatchedItem)
    })
})

//Delete One
animeWatchedRouter.delete("/:animeWatchedItemID", (req, res, next) => {
    AnimeListItem.findOneAndDelete({_id: req.params.animeWatchedItemID}, (err, deletedAnimeWatchedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedAnimeWatchedItem.title} from the Database.`)
    })
})

//Update One
animeWatchedRouter.put("/:animeWatchedItemID", (req, res, next) => {
    AnimeListItem.findOneAndUpdate(
        {_id: req.params.animeWatchedItemID},
        req.body,
        { new: true },
        (err, updatedAnimeWatchListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAnimeWatchListItem)
        }
    )
})

animeWatchedRouter.route("/")
    //Get all
    .get((req, res, next) => {
        AnimeListItem.find((err, animeWatchedListItems) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(animeWatchedListItems)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newAnimeListItem = new AnimeListItem(req.body)
        newAnimeListItem.save((err, savedAnimeWatchedListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedAnimeWatchedListItem)
        })
    })

module.exports = animeWatchedRouter