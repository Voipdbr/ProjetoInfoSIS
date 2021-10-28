const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send("The server is running.")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });