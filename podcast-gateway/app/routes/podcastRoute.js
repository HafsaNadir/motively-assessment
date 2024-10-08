const express = require('express');
const { getPodcasts } = require('../controllers/podcastController');
const { podcastValidationRules } = require('../validators/podcastValidator');

const router = express.Router();

router.get('/', podcastValidationRules, getPodcasts);

module.exports = router;
