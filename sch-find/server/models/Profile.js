//Holds data structures for MOngoDB
//keeps data schema seperate and reusable
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    course: String,
    GPA: { type: Number, required: true, min: 0, max: 10 },
    location: String,
    incomeStatus: String,
    specialCategory: String,
})

const ProfileModel = mongoose.model("profiles", profileSchema)
module.exports = ProfileModel