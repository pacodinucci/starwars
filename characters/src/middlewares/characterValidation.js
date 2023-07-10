const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
    const {name, height, mass} = req.body;
    if(name) {
        req.characterData = { name, height, mass };
        return next(); 
    }
    else throw new ClientError('Error en el nombre', 401);
}