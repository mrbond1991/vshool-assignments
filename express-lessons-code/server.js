const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(express.json())

// Routes //
app.use("/users", require("./routes/userRouter.js"))
app.use("/favMovies", require("./routes/favMoviesRouter.js"))
app.use(morgan('dev')) // logs requests to the console.

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
