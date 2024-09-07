/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('sections').del()
  await knex('sections').insert([
    {
      bed_id: 1,
      position: 0,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 1,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 2,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 3,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 2,
      position: 0,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 2,
      position: 1,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 2,
      position: 2,
      plant_id: null,
      planted_at: null,
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 3,
      position: 0,
      plant_id: null,
      planted_at: null,
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 3,
      position: 1,
      plant_id: 1,
      planted_at: new Date(Date.now()),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 3,
      position: 2,
      plant_id: null,
      planted_at: null,
      germinated_at: null,
      matured_at: null,
    },
  ]);
};