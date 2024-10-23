const recipes = [
  {
    id: 1,
    name: 'Brownie',
    procedure:
      "Using a chef's knife, coarsely chop chocolate bars or squares on a cutting board. Chopped chocolate melts smoothly and evenly and won't scorch. Some recipes call for cocoa powder in lieu of actual chocolate—either option will yield delicious brownies",
    ingredients: ['wheat flour', 'eggs', 'cocoa powder', 'butter', 'sugar'],
    duration: '60 Mins',
  },
  {
    id: 2,
    name: 'Cake',
    procedure:
      "Using a chef's knife, coarsely chop chocolate bars or squares on a cutting board. Chopped chocolate melts smoothly and evenly and won't scorch. Some recipes call for cocoa powder in lieu of actual chocolate—either option will yield delicious brownies",
    ingredients: ['wheat flour', 'eggs', 'cocoa powder', 'butter', 'sugar'],
    duration: '80 Mins',
  },
  {
    id: 3,
    name: 'Cookies',
    procedure:
      "Using a chef's knife, coarsely chop chocolate bars or squares on a cutting board. Chopped chocolate melts smoothly and evenly and won't scorch. Some recipes call for cocoa powder in lieu of actual chocolate—either option will yield delicious brownies",
    ingredients: ['wheat flour', 'eggs', 'cocoa powder', 'butter', 'sugar'],
    duration: '120 Mins',
  },
]

export const getrecipes = (req, res) => {
  res
    .status(200)
    .json({ message: 'Receipes retrieved successfully', data: recipes })
}

export const getrecipeById = (req, res) => {
  const productID = req.params.id
  const recipeDetail = recipes.find((rec) => rec.id == productID)
  if (!recipeDetail) {
    return res.status(404).json({ message: 'No Recipe Found' })
  }
  res
    .status(200)
    .json({ message: 'Recipe Found Successfully', data: recipeDetail })
}

export const createRecipe = (req, res) => {
  const { name, procedure, ingredients, duration } = req.body

  const newRecipe = {
    id: recipes.length + 1,
    name: name,
    procedure: procedure,
    ingredients: ingredients,
    duration: duration,
  }
  recipes.push(newRecipe)
  res
    .status(200)
    .json({ message: 'Recipe Created Successfully', data: newRecipe })
}

export const updateRecipe = (req, res) => {
  const recipeId = req.params.id
  const { name, procedure, ingredients, duration } = req.body
  const index = recipes.findIndex((rec) => rec.id == recipeId)
  console.log(index)
  if (index == -1) {
    return res.status(404).json({ message: 'Recipe Not Found' })
  }

  recipes[index].name = name
  recipes[index].procedure = procedure
  recipes[index].ingredients = ingredients
  recipes[index].duration = duration

  res.status(200).json({
    message: `Recipe for ${recipes[index].name} Updated Successfully`,
    data: recipes[index],
  })
}

export const deleteRecipe = (req, res) => {
  const receipeID = req.params.id
  const index = recipes.findIndex((rec) => rec.id == receipeID)
  if (index == -1) {
    return res.status(404).json({ message: 'Recipe Not Found' })
  }
  recipes.splice(index, 1)
  res.status(200).json({ message: 'Recipe Deleted Successfully' })
}
