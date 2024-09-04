/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('beds').del()
  await knex('beds').insert([
    {id: 1, name: 'Cold-Frame', size: 3},
    {id: 2, name: 'Bed 1', size: 5},
    {id: 3, name: 'Bed 2', size: 5}
  ]);
};
