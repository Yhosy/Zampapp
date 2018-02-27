'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatosSchema = new Schema({
  nombre: {
    type: String,
    required: 'nombre obligatorio'
  },
  precio: { type: Number },
  restaurante: { type: String },
  ingredientes: { type: [String] },
  descripcion: { type: String },
  categoria: { type: String },
  cantidad: { type: String },
  pic: { type: String },
  temp: { type: String },
  preferencia: { type: [String] },
  foto: { type: String },
  valoracion: { type: String }
});

module.exports = mongoose.model('Platos', PlatosSchema);
