import express from 'express'

import {
  createRecipe,
  deleteRecipe,
  getrecipeById,
  getrecipes,
  updateRecipe,
} from '../Controllers/recipeController.js'

const router = express.Router()

router.get('/recipelist', getrecipes)
router.get('/recipedetails/:id', getrecipeById)
router.post('/createrecipe', createRecipe)
router.put('/updaterecipe/:id', updateRecipe)
router.delete('/deleterecipe/:id', deleteRecipe)

export default router
