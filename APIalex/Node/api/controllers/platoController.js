'use strict';
const mongoose = require('mongoose'),
  Platos = mongoose.model('Platos');

exports.list_all_platos = function (req, res) {
  Platos.find({}, (err, plato) => {
    if (err)
      res.send(err);
    res.json(plato);
  });
};

exports.create_a_plato = function (req, res) {
  let new_plato = new Platos(req.body);
  new_plato.save((err, plato) => {
    if (err)
      res.send(err);
    res.json(plato);
  });
};

exports.read_a_plato = function (req, res) {
  Platos.findById(req.params.platoId, (err, plato) => {
    if (err)
      res.send(err);
    res.json(plato);
  });
};

exports.update_a_plato = function (req, res) {
  Platos.findOneAndUpdate(
    { _id: req.params.platoId },
    req.body,
    { new: true },
    (err, plato) => {
      if (err)
        res.send(err);
      res.json(plato);
    });
};

exports.delete_a_plato = function (req, res) {
  Platos.remove({
    _id: req.params.platoId
  }, (err, plato) => {
    if (err)
      res.send(err);
    res.json(
      {
        message: 'Plato successfully deleted'
      });
  });
};