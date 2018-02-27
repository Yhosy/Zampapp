'use strict';
const mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.list_all_users = function (req, res) {
  Users.find({}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  let new_user = new Users(req.body);
  new_user.save((err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function (req, res) {
  Users.findById(req.params.userId, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  Users.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.delete_a_user = function (req, res) {
  Users.remove({
    _id: req.params.userId
  }, (err, user) => {
    if (err)
      res.send(err);
    res.json(
      {
        message: 'User successfully deleted',
        entity: user
      });
  });
};