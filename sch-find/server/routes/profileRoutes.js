//hold API logic like form habndling, saving to DB, fetching data
const express = require("express")
const ProfileModel  = require("../models/Profile.js")

//Note: never use const app = expresss() here cause it'll crete a new mini express app but what we need is a router.

const router = express.Router();
router.use(express.json())

//creating a new profile and saving it to the database
router.post('/', async(req, res) => {
    try{
        const newProfile = new ProfileModel(req.body)
        await newProfile.save();
        res.status(200).json({ message: "Profile saved successfully"})
    }catch(err){
        res.status(500).json({ error: "Oops! Profile creation failed!!", details: err.message})
    }
})


module.exports = router;
