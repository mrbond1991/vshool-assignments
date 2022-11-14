const express = require("express")
const app = express()

app.use(express.json())

app.use("/todos", require("./routes/todoRouter.js"))

app.listen(9000, () => {
    console.log("Todo server is running on Port 9000")
})