const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get One
inventoryRouter.get('/:inventoryItemId', (req, res, next) => {
    Inventory.find({_id: req.params.inventoryItemId}, (err, foundInventoryItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundInventoryItem)
    })
})

//Delete One
inventoryRouter.delete('/:inventoryItemId', (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryItemId}, (err, deletedInventoryItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedInventoryItem.title} from the Database!`)
    })
})

//Updated One
inventoryRouter.put('/:inventoryItemId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryItemId},
        req.body,
        {new: true},
        (err, updatedInventoryItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventoryItem)
        }
    )
})

inventoryRouter.route('/')
    //Get All
    .get((req, res, next) => {
        Inventory.find((err, items) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

    //Post One
    .post((req, res, next) => {
        const newInventoryItem = new Inventory(req.body)
        newInventoryItem.save((err, savedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedItem)
        })
    })

    module.exports = inventoryRouter