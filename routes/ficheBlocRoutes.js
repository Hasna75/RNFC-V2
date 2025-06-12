const express = require('express');
const router = express.Router();
const ficheBlocController = require('../controllers/ficheBlocController');

router.get('/fiches/blocs', ficheBlocController.getAllFichesBloc);
router.get('/fiches/blocs/:id', ficheBlocController.getFicheBlocById);
router.get('/fiches/bloc/:blocId', ficheBlocController.getFicheBlocByBloc);
router.post('/fiches/blocs', ficheBlocController.createFicheBloc);
router.put('/fiches/blocs/:id', ficheBlocController.updateFicheBloc);
router.delete('/fiches/blocs/:id', ficheBlocController.deleteFicheBloc);

module.exports = router;