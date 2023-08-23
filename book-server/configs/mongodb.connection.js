const mongoose = require("mongoose")

const mongoDb = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Books")
    .then(() => {
      console.log("Connected to MongoDB")
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = mongoDb