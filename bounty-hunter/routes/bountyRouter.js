const express = require('express')
const bountyRouter = express.Router()
const {v4: uuid} = require("uuid")

const bounties = [
    {
        fName: "Luke",
        lName: "Skywalker",
        living: true,
        bountyAmount: 1000000000,
        type: 'Jedi',
        _id: uuid()
    },
    {
        fName: "Obi Wan",
        lName: "Kinobi",
        living: true,
        bountyAmount: 1000000000,
        type: 'Jedi',
        _id: uuid()
    },
    {
        fName: "Darth",
        lName: "Vader",
        living: true,
        bountyAmount: 2000000000,
        type: 'Sith',
        _id: uuid()
    },
    {
        fName: "Qui-Gon",
        lName: "Jinn",
        living: false,
        bountyAmount: 0,
        type: 'Jedi',
        _id: uuid()
    },
    {
        fName: "Darth",
        lName: "Sidious",
        living: true,
        bountyAmount: 5000000000,
        type: 'Jedi',
        _id: uuid()
    }
]

// GET ONE
bountyRouter.get("/:bountyId", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params.bountyId)
    res.send(foundBounty)
})

// PUT/UPDATE
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyIndex = bounties.findIndex(bounty => bounty._id === req.params.bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

// DELETE
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyIndex = bounties.findIndex(bounty => bounty._id === req.params.bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Congratulations, the bounty has been eliminated. Check you account for the bounty amount.")
})

bountyRouter.route("/")
    // GET ALL
    .get((req, res) => {
        res.send(bounties)
    })
    // POST ONE
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send( `Successfully added ${newBounty.fName} ${newBounty.lName} to your Bounties List` )
    })

module.exports = bountyRouter