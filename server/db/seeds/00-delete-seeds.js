/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sections').del()
  await knex('plants').del()
  await knex('beds').del()

};
