const path = require('path')
var cors = require('cors');
require('dotenv').config({
  path: path.join(__dirname, `../../.env${process.argv[2]}`),
})
import 'reflect-metadata'
import express from 'express'
import userRoutes from './config/userRoutes'
import '../infra/database/connect'
import swaggerUI from "swagger-ui-express";
const swaggerDocument = require('./../../swagger.json');


const app = express()
app.use(cors());
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(process.env.PORT, () =>
  console.log(`Server running ${process.env.PORT}`)
)
