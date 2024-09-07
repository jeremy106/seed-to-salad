/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('beds').del()
  await knex('beds').insert([
    {id: 1, name: 'Cold-Frame', size: 6},
    {id: 2, name: 'Raised Bed 1', size: 4},
    {id: 3, name: 'Raised Bed 2', size: 4}
  ]);
};
