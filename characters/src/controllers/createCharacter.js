const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const  object  = req.body;
    const newCharacter = await Character.create(object)
    response(res, 201, newCharacter.data);
};