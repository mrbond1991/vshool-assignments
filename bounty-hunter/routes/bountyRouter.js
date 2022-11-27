const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

// GET ONE
bountyRouter.get("/:bountyId", (req, res, next) => {
    Bounty.find({_id: req.params.bountyId}, (err, foundBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundBounty)
    })
})

// Delete One
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted Bounty ${deletedBounty.fName + deletedBounty.lName} from the Database. Your account will be credited ${deletedBounty.bountyAmount}.`)
    })
})

// Update One
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(201).send(updatedBounty)
        }
    )
})


bountyRouter.route("/")
    // GET ALL
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    // POST ONE
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedBounty)
        })
    })

module.exports = bountyRouter