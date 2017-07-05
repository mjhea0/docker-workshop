const express = require('express');

const router = express.Router();

const locations = [
  {
    id: 1,
    lat: -26.37589,
    long: -160.38605
  },
  {
    id: 2,
    lat: 69.14460,
    long: -18.94241
  },
  {
    id: 3,
    lat: -76.55254,
    long: -138.56918
  }
];

/*
get all locations
 */
router.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    data: locations,
  });
});

module.exports = router;
