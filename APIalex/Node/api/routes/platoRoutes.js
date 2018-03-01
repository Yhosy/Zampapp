'use strict';
module.exports = function (app) {
  const platosController = require('../controllers/platoController');

  // todoList Routes
  app.route('/platos')
    .get((platosController.list_all_platos))
    .post(platosController.create_a_plato);


  app.route('/platos/:platoId')
    .get(platosController.read_a_plato)
    .put(platosController.update_a_plato)
    .delete(platosController.delete_a_plato);
};
