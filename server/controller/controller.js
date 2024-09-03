const model = require('../models/model');

// ADD NEW SALE
// post http://localhost:8080/api/cars
const addCars = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { type, brand, mod, price, units, year} = req.body;
        const create = new model.Cars({
            type,
            brand,
            mod,
            price,
            units,
            year
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Cars ${err.message}` });
    }
};
// post http://localhost:8080/api/bikes
const addBikes = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { type, brand, mod, price, units, year} = req.body;
        const create = new model.Bikes({
            type,
            brand,
            mod,
            price,
            units,
            year
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Bikes ${err.message}` });
    }
};
// post http://localhost:8080/api/scooters
const addScooters = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { type, brand, mod, price, units, year} = req.body;
        const create = new model.Scooters({
            type,
            brand,
            mod,
            price,
            units,
            year
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Scooters ${err.message}` });
    }
};
// post http://localhost:8080/api/trucks
const addTrucks = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { type, brand, mod, price, units, year} = req.body;
        const create = new model.Trucks({
            type,
            brand,
            mod,
            price,
            units,
            year
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Trucks ${err.message}` });
    }
};

// get http://localhost:8080/api/cars
const getCars = async (req, res) => {
    let data = await model.Cars.find({})
    await data.map(v => Object.assign({}, {type: v.type}))
    return res.json(data);
}
// get http://localhost:8080/api/bikes
const getBikes = async (req, res) => {
    let data = await model.Bikes.find({})
    await data.map(v => Object.assign({}, {type: v.type}))
    return res.json(data);
}
// get http://localhost:8080/api/scooters
const getScooters = async (req, res) => {
    let data = await model.Scooters.find({})
    await data.map(v => Object.assign({}, {type: v.type}))
    return res.json(data);
}
// get http://localhost:8080/api/trucks
const getTrucks = async (req, res) => {
    let data = await model.Trucks.find({})
    await data.map(v => Object.assign({}, {type: v.type}))
    return res.json(data);
}


// post http://localhost:8080/api/accounts
const addAccount = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json("Post HTTP data not provided");

        let { username, password } = req.body;
        const create = new model.Accounts({
            username,
            password
        })
        await create.save();
        res.json(create);
    } catch (err) {
        res.status(400).json({ message: `Error while creating Account ${err.message}` });
    }
};
// get http://localhost:8080/api/accounts
const getAccount = async (req, res) => {
    let data = await model.Accounts.find({})
    await data.map(v => Object.assign({}, {type: v.type}))
    return res.json(data);
}

module.exports = {
    addCars,
    addBikes,
    addScooters,
    addTrucks,
    getCars,
    getBikes,
    getScooters,
    getTrucks,
    addAccount,
    getAccount
}