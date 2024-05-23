const Pairings = require('../models/pairings');

module.exports = {
    index,
    show,
};

function index(req,res) {
    const pairings = Pairings.getAll();
    res.json(pairings);
};

function show(req, res) {
    const pairing = Pairings.getOne(req.params.id);
    res.json(pairing);
}