exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("first_name", 255).notNullable().index();
      tbl.string("last_name", 255).notNullable().index();
      tbl.string("email", 255).notNullable().unique().index();
      tbl.string("password", 255).notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    })
    .createTable("objective_types", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.string("description", 255);
      tbl.integer("created_by").index();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    })
    .createTable("sto", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.date("deadline");
      tbl.boolean("completed").defaultTo(false);
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("objective_types")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("lto", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.date("deadline");
      tbl.boolean("completed").defaultTo(false);
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("objective_types")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("dates", (tbl) => {
      tbl.increments();
      tbl.string("date", 128).notNullable().index();      
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.boolean("completed").defaultTo(false);
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("date_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dates")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("cardio", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.decimal("time", 8, 2).notNullable();
      tbl.decimal("distance", 8, 2).notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("date_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dates")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("strength", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().index();
      tbl.string("variation", 255).notNullable().index();
      tbl.integer("sets")
      tbl.integer("reps")
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("date_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dates")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("strength")
    .dropTableIfExists("cardio")
    .dropTableIfExists("tasks")
    .dropTableIfExists("users_dates")
    .dropTableIfExists("dates")
    .dropTableIfExists("lto")
    .dropTableIfExists("sto")
    .dropTableIfExists("objective_types")
    .dropTableIfExists("users");
};

// .createTable("fitness", (tbl) => {
//   tbl.increments();
//   tbl.string("exercise", 255);
//   tbl.string("variation", 255);
//   tbl.integer("sets");
//   tbl.integer("reps");
//   tbl.timestamp("created_at").defaultTo(knex.fn.now());
//   tbl.timestamp("modified_at");
//   tbl.timestamp("deleted_at");
//   tbl
//     .integer("day_id")
//     .unsigned()
//     .notNullable()
//     .references("id")
//     .inTable("activities")
//     .onUpdate("CASCADE")
//     .onDelete("RESTRICT");
// })
// .createTable("running", (tbl) => {
//   tbl.increments();
//   tbl.decimal("distance");
//   tbl.time("time");
//   tbl.timestamp("created_at").defaultTo(knex.fn.now());
//   tbl.timestamp("modified_at");
//   tbl.timestamp("deleted_at");
//   tbl
//     .integer("day_id")
//     .unsigned()
//     .notNullable()
//     .references("id")
//     .inTable("activities")
//     .onUpdate("CASCADE")
//     .onDelete("RESTRICT");
// });
