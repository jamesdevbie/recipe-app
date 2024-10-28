import mongoose from 'mongoose'

// Creating DB Schema the Recipe App
const recipeSchema = mongoose.Schema({
  name: String,
  procedure: String,
  ingredients: [],
  duration: String,
})

//creating DB collection named "recipes" using DB Schema "recipeSchema"
//mongoose.model() returns Mongoose Object recipeModel using which we will manipulate or retrieve our DB
const recipeModel = mongoose.model('recipes', recipeSchema)

export default recipeModel
