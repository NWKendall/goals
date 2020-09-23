
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('objective_types').del()
    .then(function () {
      // Inserts seed entries
      const objectiveTypeSeed = [
        {id: 1, name: 'Fitness / Health', description: 'TEST'},
        {id: 2, name: 'Professional', description: 'TEST'},
        {id: 3, name: 'Material', description: 'TEST'}, 
        {id: 4, name: 'Relationship & Travel', description: 'TEST'}, 
        {id: 5, name: 'Personal', description: 'TEST'},
      ]
      return knex('objective_types').insert(objectiveTypeSeed);
    });
};
