const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

const carRoutes = require('./src/routes/car.routes')

app.use('/api/cars', carRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });