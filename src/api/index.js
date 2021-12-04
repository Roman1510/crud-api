const express = require('express');

const emojis = require('./emojis');
const dbrequest = require('./dbrequest')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/dbrequest',dbrequest)

module.exports = router;
