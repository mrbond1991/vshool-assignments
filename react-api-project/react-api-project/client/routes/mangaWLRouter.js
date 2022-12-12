const express = require('express')
const mangaWLRouter = express.Router()
const MangaWishListItem = require('../models/mangaWishItem.js')

//Get One
mangaWLRouter.get("/:mangaWishItemID", (req, res, next) => {
    MangaWishListItem.find({_id: req.params. mangaWishItemID}, (err, foundMangaWishItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundMangaWishItem)
    })
})

//Delete One
mangaWLRouter.delete("/:mangaWishItemID", (req, res, next) => {
    MangaWishListItem.findOneAndDelete({_id: req.params.mangaWishItemID}, (err, deletedMangaWishItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedMangaWishItem.title} from the Database.`)
    })
})

//Update One
mangaWLRouter.put("/:mangaWishItemID", (req, res, next) => {
    MangaWishListItem.findOneAndUpdate(
        {_id: req.params.mangaWishItemID},
        req.body,
        { new: true },
        (err, updatedMangaWishListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMangaWishListItem)
        }
    )
})

mangaWLRouter.route("/")
    //Get all
    .get((req, res, next) => {
        MangaWishListItem.find((err, mangaWishListItems) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(mangaWishListItems)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newMangaListItem = new MangaWishListItem(req.body)
        newMangaListItem.save((err, savedMangaWishListItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedMangaWishListItem)
        })
    })

module.exports = mangaWLRouter