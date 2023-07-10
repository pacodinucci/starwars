const Film = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const object = req.body;
    const newFilm = await Film.create(object);
    response(res, 201, newFilm);
};