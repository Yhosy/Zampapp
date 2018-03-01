const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  // Users = require('./api/models/userModel'),
  Platos = require('./api/models/platoModel'),
  cors = require('cors'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Zampapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// const routesUsers = require('./api/routes/userRoutes'); //importing route
const routesPlatos = require('./api/routes/platoRoutes'); //importing route
// routesUsers(app); //register the route
routesPlatos(app); //register the route


app.options('*', cors());
app.listen(port);

console.log('users RESTful API server started on: ' + port);