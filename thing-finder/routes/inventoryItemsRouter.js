const express = require("express")
const inventoryItemsRouter = express.Router()
const {v4: uuid} = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryItemsRouter.get("/search/itemName", (req, res) => {
    const filteredNameInventoryItem = inventoryItems.filter(item => item.name === req.query.itemName)
    res.send(filteredNameInventoryItem)
})

inventoryItemsRouter.get("/search/itemType", (req, res) => {
    const filteredItemType = inventoryItems.filter(item => item.type === req.query.itemType)
    res.send(filteredItemType)
})

inventoryItemsRouter.get("/search/itemPrice", (req, res) => {
    const filteredItemPrice = inventoryItems.filter(item => item.price === req.query.itemPrice)
    res.send(filteredItemPrice)
})

inventoryItemsRouter.route("/")
    .get((req, res) => {
        res.send(inventoryItems)
    })
    .post((req, res) => {
        const newInventoryItem = req.body
        newUser._id = uuid()
        users.push(newInventoryItem)
        res.send( `Successfully added ${newInventoryItem.name} to the database!` )
    })

module.exports = inventoryItemsRouter