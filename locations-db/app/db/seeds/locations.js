exports.seed = (knex, Promise) => {
  return knex('locations').del()
  .then(() => {
    return Promise.join(
      knex('locations').insert({
        lat: 40.014986,
        long: -105.270546,
      })
    );
  })
  .catch((err) => { console.log(err); });
};
