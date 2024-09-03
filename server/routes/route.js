const routes = require('express').Router();
const controller = require("../controller/controller");

routes.route('/api/cars')
    .post(controller.addCars)
    .get(controller.getCars);

routes.route('/api/bikes')
    .post(controller.addBikes)
    .get(controller.getBikes);

routes.route('/api/scooters')
    .post(controller.addScooters)
    .get(controller.getScooters);

routes.route('/api/trucks')
    .post(controller.addTrucks)
    .get(controller.getTrucks);

routes.route('/api/accounts')
    .post(controller.addAccount)
    .get(controller.getAccount);

module.exports = routes;