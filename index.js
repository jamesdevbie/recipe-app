import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './Routes/recipeRoutes.js'

//dotenv config
dotenv.config()

//Initializing express
const app = express()

//Intializing Cors middleware
app.use(cors())

//Initializing default middleware to read req.body
app.use(express.json())

//default Route

app.get('/', (req, res) => {
  res.status(200).send('Welcome to RECIPE API')
})

//Custom route for base URL

app.use('/api/recipe', router)

// Initializing port from dotenv
const port = process.env.PORT || 5000

// Starting Server

app.listen(port, () => console.log('Server Started Successfully'))
