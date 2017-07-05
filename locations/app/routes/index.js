const express = require('express');

const router = express.Router();

/*
sanity check!
 */
router.get('/ping', (req, res, next) => {
  res.send('pong');
});

module.exports = router;
