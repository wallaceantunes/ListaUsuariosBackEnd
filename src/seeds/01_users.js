exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user: 'admin', password: '$2b$10$ZRyyc1lVGL7fxCEN1GMBwudq9WmeJmeyDJECEcxnUsKW5z55C0uWq'}
        
      ]);
    });
};
