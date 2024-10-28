import recipeModel from '../Models/recipeSchema.js'

export const createRecipe = async (req, res) => {
  try {
    // recipeModel is Mongoose collection returned by mongoose.connect()
    //using recipeModel object we are creating a new document called newRecipe
    const newRecipe = new recipeModel(req.body)
    //saving the newrecipe  in Mongoose collection returned by mongoose.connect()
    await newRecipe.save()
    res
      .status(200)
      .json({ message: 'Recipe Created Successfully', data: newRecipe })
  } catch (error) {
    res.status(404).json({ message: 'Recipe Not Created' })
  }
}

export const getrecipes = async (req, res) => {
  try {
    //find() to retrieve all documents in our DB collection using recipeModel Object
    const recipeList = await recipeModel.find()
    res
      .status(200)
      .json({ message: 'Recipes retrieved successfully', data: recipeList })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getrecipeById = async (req, res) => {
  // Capturing id from request parameter and naming it as reeipeId
  const recipeId = req.params.id
  ////findById() to retrieve specific documents in our DB collection matching ID inside recipeModel Object
  const recipeDetail = await recipeModel.findById(recipeId)

  try {
    if (!recipeDetail) {
      return res.status(404).json({ message: 'No Recipe Found' })
    }
    res
      .status(200)
      .json({ message: 'Recipe Found Successfully', data: recipeDetail })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id
    // destructing data from request body
    const { name, procedure, ingredients, duration } = req.body
    // findByIdAndUpdate() given 3 parameteres (id as in object, data as in object, optional param new:true returns the modified document )
    const updatedRecipe = await recipeModel.findByIdAndUpdate(
      { _id: recipeId },
      { name, procedure, ingredients, duration },
      { new: true }
    )
    //findByIDAndUpdate() returns the documents along with "matchedcount" field with which we can check if any match is found or not
    if (updatedRecipe.matchedCount == 0) {
      return res.status(404).json({ message: 'Recipe Not Found' })
    }
    res.status(200).json({
      message: 'Recipe Updated Successfully',
      data: updatedRecipe,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id
    //id param should be sent as object
    const result = await recipeModel.findByIdAndDelete({ _id: recipeId })
    if (!result) {
      return res.status(404).json({ message: 'Recipe Not Found' })
    }

    // To returnn all the available documents
    const recipeList = await recipeModel.find()
    res.status(200).json({ message: 'Product deleted', data: recipeList })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
