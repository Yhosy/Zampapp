const mongoose = require('mongoose'),
  Users = require('./api/models/userModel')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UsersDb');


for (let i = 0; i < 100; i++) {
  let new_user = new Users({ name: i.toString() });
  new_user.save();
}

console.log('Data created');