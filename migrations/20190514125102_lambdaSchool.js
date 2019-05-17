exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl
      .increments("id")

      .notNullable();
    tbl.string("name", 20);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
