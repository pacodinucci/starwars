const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/films', controllers.getFilms);
router.get('./films', controllers.getFilmById);
router.post('/films', middlewares.filmValidation, controllers.createFilm);

module.exports = router;