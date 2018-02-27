'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: {
    type: String,
    required: 'Name the user'
  },  
  vecinos: [{
    piso: {
      type: String
    },
    puerta: {
      type: Number
    }
  }],
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'active', 'inactive']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Users', UsersSchema);

class Vivienda {
  constructor() {
    this.Piso = "";
    this.Puerta = "";
  }
}