const express = require('express');
const queries = require('../db/queries.js');

const router = express.Router();

/*
get all locations
 */
router.get('/', (req, res, next) => {
  return queries.getAllLocations()
  .then((locations) => {
    res.json({
      status: 'success',
      data: locations,
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});


module.exports = router;
