const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv");
const profileRoutes = require('./routes/profileRoutes');

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config(); // loads .env file

//will do env coding later
mongoose.connect("mongodb://localhost:27017/profiles")
        .then(() => console.log("MongoDB connected"))
        .catch(err=> console.log(err))

app.use('/profile', profileRoutes)

app.listen(4000, ()=> {
    console.log("Server is running!!Get ready for action!!")
})

