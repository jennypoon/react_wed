require('dotenv').config();

const env = process.env.ENV || 'development';


const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


//DATABASE
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);


//-----------------//

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/testing', (req, res) => {
  knex('registration')
    .select('*')
    .asCallback((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  console.log("Testing");
});


app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`App listening on ${port}`);