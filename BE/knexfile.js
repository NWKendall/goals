require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: process.env.DB_PASSWORD,
      database: 'templateDB'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    }
  },
  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: process.env.DB_PASSWORD,
      database: 'templateDB'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./database/seeds"
    }
  }

};
