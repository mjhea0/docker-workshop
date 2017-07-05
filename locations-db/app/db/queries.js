const knex = require('./connection');

function getAllLocations() {
  return knex('locations').select();
}

function getSingleLocation(locationID) {
  return knex('locations').select().where('id', locationID);
}

function addLocation(obj) {
  return knex('locations').insert(obj);
}

function updateLocation(locationID, obj) {
  return knex('locations').update(obj).where('id', locationID);
}

function removeLocation(locationID) {
  return knex('locations').del().where('id', locationID);
}

module.exports = {
  getAllLocations,
  getSingleLocation,
  addLocation,
  updateLocation,
  removeLocation,
};
