const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.confg()

const app = express()

app.use(cors())
app.use(express.json())


//Connect Mongoose

//Routes