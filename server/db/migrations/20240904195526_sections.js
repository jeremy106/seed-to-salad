/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('sections', (table) => {
    table.increments('id')
    table.integer('bed_id').references('beds.id')
    table.integer('position')
    table.integer('plant_id').references('plants.id')
    table.datetime('planted_at').defaultTo(null)
    table.dateTime('germinated_at').defaultTo(null)
    table.dateTime('matured_at').defaultTo(null)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sections')
};
