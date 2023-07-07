const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/characters', controllers.getCharacters);
router.get('/characters/:id', controllers.getCharacterById);
router.post('/characters', middlewares.characterValidation, controllers.createCharacter);


module.exports = router;