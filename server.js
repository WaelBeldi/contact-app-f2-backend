const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({path: "./config/.env"})

const app = express();
connectDB();

const contactRouter = require("./routes/contactRoutes")
const authRouter = require("./routes/authRoutes")

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/contact", contactRouter)
app.use("/api/auth", authRouter)

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  err ? console.log(err)
      : console.log(`Server running on port ${PORT}`)
})