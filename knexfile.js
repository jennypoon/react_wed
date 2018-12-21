require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
      ssl      : process.env.DB_SSL

    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      DATABASE_URL: 'postgres://clseknnnslksmv:c7138f5b9ed92a386ca864fd60ea2b2e11c9fc92fdc790dda5e6967cd5c27294@ec2-54-243-238-46.compute-1.amazonaws.com:5432/d5csc4353v6afc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }
};