import express from 'express'

import {
  createRecipe,
  deleteRecipe,
  getrecipeById,
  getrecipes,
  updateRecipe,
} from '../Controllers/recipeController.js'

// creating express router
const router = express.Router()

// Adding Custom routes as per requirement along with its respective controller functions
router.get('/recipelist', getrecipes)
router.get('/recipedetails/:id', getrecipeById)
router.post('/createrecipe', createRecipe)
router.put('/updaterecipe/:id', updateRecipe)
router.delete('/deleterecipe/:id', deleteRecipe)

export default router
