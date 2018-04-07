
// required dependencies

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

// listening port

const port = 8000;

// process URL encoded form

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
                      
 //routing db from Postman
  db = database.db("note-api")	

// routing index.js
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})