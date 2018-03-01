'use strict';
const mongoose = require('mongoose'),
  Platos = mongoose.model('Platos');

exports.list_all_platos = function (req, res) {
  var query = {};
  var searchFields = ["categoria", "cantidad", "preferencia", "pic", "temp"];

  var regexQueryWrapper = {};
  regexQueryWrapper["$and"] = [];
  var wrapper = { "$or": [] };

  searchFields.forEach(function (field) {

    var query = {};
    query[field] = req.query[field];
    wrapper["$or"].push(query);
  });

  regexQueryWrapper["$and"].push(wrapper);

  Platos.find(regexQueryWrapper, (err, plato) => {

    if (err)
      res.send(err);
    res.json(plato);
    console.log(plato);
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
