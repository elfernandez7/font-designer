const express = require('express');
const router = express.Router();
const pairingsControl = require('../controllers/pairings');

router.get('/', pairingsControl.index);
router.get('/:id', pairingsControl.show);


module.exports = router;