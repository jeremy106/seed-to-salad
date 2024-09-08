/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('sections').del()

  function dateShift(shift){
    let date = new Date(Date.now()) 
    return date.setDate(date.getDate() - shift)
  }

  await knex('sections').insert([
    {
      bed_id: 1,
      position: 0,
      plant_id: 1,
      planted_at: dateShift(30),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 1,
      plant_id: 1,
      planted_at: dateShift(20),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 2,
      plant_id: 1,
      planted_at: dateShift(5),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 1,
      position: 3,
      plant_id: 1,
      planted_at: dateShift(1),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 2,
      position: 0,
      plant_id: 1,
      planted_at: dateShift(90),
      germinated_at: null,
      matured_at: null,
    },
    {
      bed_id: 2,
      position: 1,
      plant_id: 1,
      planted_at: dateShift(60),
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
      planted_at: dateShift(40),
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