const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/otakuSearchDb',
    () => console.log('Connected to Otaku Search Database')
)

app.use("/api/animeWishList", require("./routes/animeWLRouter.js"))
app.use("/api/mangaWishList", require("./routes/mangaWLRouter.js"))
app.use("/api/animeWatchList", require("./routes/animeWatchedRouter.js"))
app.use("/api/mangaWatchList", require("./routes/mangaWatchedRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})