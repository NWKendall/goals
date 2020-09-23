const knexCleaner = require("knex-cleaner");

exports.seed = async knex => {
    const environment = process.env.DB_ENV;
    if(["testing", "production"].find(env => env === environment)) {
        return knexCleaner.clean(knex, {
            mode: 'truncate',
            restartIdentity: true,
            ignoreTables: ['knex_migrations', 'knex_migrations_lock']
          });
    }
    await knex("running").delete()
    await knex("fitness").delete()
    await knex("activities").delete()
}