'use strict';
const mongoose = require('mongoose'),
Platos = mongoose.model('Platos');

exports.list_all_platos = function (req, res) {
  console.log('req.query:',req.query);

  var q = {}; // declare the query object
  q['$and']=[]; // filter the search by any criteria given by the user
  
  if(req.query.categoria){ // if the criteria has a value or values
    var catarr=req.query.categoria.trim().split(',');
    console.log('catarr', catarr)
    var wrapperCat = {"$or": []};
    var queryCat = {};
    for(let i=0; i<catarr.length; i++){
      console.log('catarr.length', catarr.length)
      wrapperCat["$or"].push({categoria:catarr[i]});
    }
    console.log('wrapperCat', wrapperCat)
    q["$and"].push(wrapperCat); // add to the query object
  }
  if(req.query.cantidad){
    var cantarr=req.query.cantidad.trim().split(',');
    var wrapperCant = {"$or": []};
    var queryCant = {};
    for(let i=0; i<cantarr.length; i++){
      wrapperCant["$or"].push({cantidad:cantarr[i]});
    }
    q["$and"].push(wrapperCant);
  }
  if(req.query.preferencia){
    var prefsarr=req.query.preferencia.trim().split(',');
    var wrapperPref = {"$or": []};
    var queryPref = {};
    for(let i=0; i<prefsarr.length; i++){
      wrapperPref["$or"].push({preferencia:prefsarr[i]});
    }
    q["$and"].push(wrapperPref);
  }
  if(req.query.pic){
    var picarr=req.query.pic.trim().split(',');
    var wrapperPic = {"$or": []};
    var queryPic = {};
    for(let i=0; i<picarr.length; i++){
      wrapperPic["$or"].push({pic:picarr[i]});
    }
    q["$and"].push(wrapperPic);
  }
  if((req.query.temp).length > 0 && req.query.temp !== null){
    var temparr=req.query.temp.trim().split(',');
    var wrapperTemp = {"$or": []};
    var queryTemp = {};
    for(let i=0; i<temparr.length; i++){
      wrapperTemp["$or"].push({temp:temparr[i]});
    }
    q["$and"].push(wrapperTemp);
  }

  console.log('q', q)
  Platos.find(q, (err, plato) => {
    if(plato == undefined) console.log('no hay platos');
    else if (err) res.send(err);
    else res.json(plato);
    console.log(plato);
    
  });
};

exports.create_a_plato = function (req, res) {
  console.log('req.body:',req.body);
  let new_plato = new Platos(req.body);
  new_plato.save((err, plato) => {
    if (err) res.send(err);
      res.json(plato);
  });
};

exports.read_a_plato = function (req, res) {
  Platos.findById(req.params.platoId, (err, plato) => {
    if (err) res.send(err);
      res.json(plato);
  });
};

exports.update_a_plato = function (req, res) {
  Platos.findOneAndUpdate(
    { _id: req.params.platoId },
    req.body,
    { new: true },
    (err, plato) => {
      if (err) res.send(err);
        res.json(plato);
    });
};

exports.delete_a_plato = function (req, res) {
  Platos.remove({
    _id: req.params.platoId
  }, (err, plato) => {
    if (err) res.send(err);
      res.json(
      {
        message: 'Plato successfully deleted'
      });

  });
};
