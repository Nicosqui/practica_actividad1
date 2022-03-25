const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const routerApi = require('./src/routes');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Using the port', port));

/* http://localhost:5000/actividad_01 */
app.use(express.json());


mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Connect with mongoDB'))
    .catch((error) => console.error(error))


routerApi(app);