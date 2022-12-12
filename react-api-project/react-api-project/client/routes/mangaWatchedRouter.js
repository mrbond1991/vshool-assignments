const express = require('express')
const mangaWatchedRouter = express.Router()
const MangaWatchedListItem = require('../models/mangaListItem.js')

//Get One
mangaWatchedRouter.get("/:mangaWatchedItemID", (req, res, next) => {
    MangaWatchedListItem.find({_id: req.params. mangaWatchedItemID}, (err, foundMangaWatchedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundMangaWatchedItem)
    })
})

//Delete One
mangaWatchedRouter.delete("/:mangaWatchedItemID", (req, res, next) => {
    MangaWatchedListItem.findOneAndDelete({_id: req.params.mangaWatchedItemID}, (err, deletedMangaWatchedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedMangaWatchedItem.title} from the Database.`)
    })
})

//Update One
mangaWatchedRouter.put("/:mangaWatchedItemID", (req, res, next) => {
    MangaWatchedListItem.findOneAndUpdate(
        {_id: req.params.mangaWatchedItemID},
        req.body,
        { new: true },
        (err, updatedMangaWatchedListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMangaWatchedListItem)
        }
    )
})

mangaWatchedRouter.route("/")
    //Get all
    .get((req, res, next) => {
        MangaWatchedListItem.find((err, mangaWatchedListItems) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(mangaWatchedListItems)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newMangaListItem = new MangaWatchedListItem(req.body)
        newMangaListItem.save((err, savedMangaWishListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedMangaWishListItem)
        })
    })

module.exports = mangaWatchedRouter