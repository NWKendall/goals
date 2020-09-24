
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('objective_types').del()
    .then(function () {
      // Inserts seed entries
      const objectiveTypeSeed = [
        {id: 1, name: 'Fitness / Health', description: 'TEST', created_by: 1},
        {id: 2, name: 'Professional', description: 'TEST', created_by: 1},
        {id: 3, name: 'Material', description: 'TEST', created_by: 1}, 
        {id: 4, name: 'Relationship & Travel', description: 'TEST'}, 
        {id: 5, name: 'Personal', description: 'TEST', created_by: 1},
      ]
      return knex('objective_types').insert(objectiveTypeSeed);
    });
};
