/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('plants', (table) =>{
    table.increments('id')
    table.string('plant_name')
    table.string('profile_name')
    table.integer('days_to_germinate')
    table.integer('days_to_maturity')
  })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('plants')
};
