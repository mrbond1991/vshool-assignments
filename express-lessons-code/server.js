const express = require("express")
const app = express()

app.use(express.json())

// Routes //
app.use("/users", require("./routes/userRouter.js"))
app.use("/favMovies", require("./routes/favMoviesRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
