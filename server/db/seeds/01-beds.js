/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('beds').del()
  await knex('beds').insert([
    {id: 1, name: 'Cold-Frame'},
    {id: 2, name: 'Raised Bed 1'},
    {id: 3, name: 'Raised Bed 2'}
  ]);
};
