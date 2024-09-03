const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carsModel = new Schema({
    type: {type: String, default: "Car"},
    brand: {type: String, default: "NA"},
    mod: {type: String, default: "NA"},
    price: {type: String, default: "NA"},
    units: {type: Number, default: 0},
    year: {type: String, default: "NA"}
})

const bikesModel = new Schema({
    type: {type: String, default: "Bike"},
    brand: {type: String, default: "NA"},
    mod: {type: String, default: "NA"},
    price: {type: String, default: "NA"},
    units: {type: Number, default: 0},
    year: {type: String, default: "NA"}
})

const scootersModel = new Schema({
    type: {type: String, default: "Scooter"},
    brand: {type: String, default: "NA"},
    mod: {type: String, default: "NA"},
    price: {type: String, default: "NA"},
    units: {type: Number, default: 0},
    year: {type: String, default: "NA"}
})

const trucksModel = new Schema({
    type: {type: String, default: "Truck"},
    brand: {type: String, default: "NA"},
    mod: {type: String, default: "NA"},
    price: {type: String, default: "NA"},
    units: {type: Number, default: 0},
    year: {type: String, default: "NA"}
})

const accountModel = new Schema({
    username: {type: String, default: "admin"},
    password: {type: String, default: "admin123"},
})

const Cars = mongoose.model("cars", carsModel)
const Bikes = mongoose.model("bikes", bikesModel)
const Scooters = mongoose.model("scooters", scootersModel)
const Trucks = mongoose.model("trucks", trucksModel)
const Accounts = mongoose.model("account", accountModel)

module.exports = {
    Cars,
    Bikes,
    Scooters,
    Trucks,
    Accounts
}