exports.up = function (knex) {
  return knex.schema
    .createTable("main", (tbl) => {
      tbl.increments();
      tbl.integer("weight");
      tbl.date("date");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    })
    .createTable("activities", (tbl) => {
      tbl.increments();
      tbl.boolean("awake").defaultTo(false);
      tbl.boolean("stretch").defaultTo(false);
      tbl.boolean("exercise").defaultTo(false);
      tbl.boolean("mantra").defaultTo(false);
      tbl.boolean("study1").defaultTo(false);
      tbl.boolean("music").defaultTo(false);
      tbl.boolean("study2").defaultTo(false);
      tbl.boolean("reading").defaultTo(false);
      tbl
        .integer("day_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("main")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    })
    .createTable("fitness", (tbl) => {
      tbl.increments();
      tbl.string("exercise", 255);
      tbl.string("variation", 255);
      tbl.integer("sets");
      tbl.integer("reps");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("day_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("main")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    })
    .createTable("running", (tbl) => {
      tbl.increments();
      tbl.decimal("distance");
      tbl.time("time");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
      tbl
        .integer("day_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("main")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl.timestamp("modified_at");
      tbl.timestamp("deleted_at");
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("running")
        .dropTableIfExists("fitness")
        .dropTableIfExists("activities")
        .dropTableIfExists("main")
};
