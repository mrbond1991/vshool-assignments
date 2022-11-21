const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev')) // logs requests to the console.

// Routes //
app.use("/users", require("./routes/userRouter.js"))
app.use("/favMovies", require("./routes/favMoviesRouter.js"))

//Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
