/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('plants').del()
  await knex('plants').insert([
    {
      id: 1,
      plant_name: 'Lettuce',
      profile_name: 'default',
      days_to_germinate: 14,
      days_to_maturity: 60
    }
  ]);
};