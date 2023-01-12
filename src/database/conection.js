
const {Pool} = require('pg');

const config = {
    user: 'gabyscript_user',
    host: 'postgresql-gabyscript.alwaysdata.net',
    database: 'gabyscript_likeme',
    password: 'desafio_likeme',
    port: 5432,
    allowExitOnIdle: true
}

const client = new Pool(config);

module.exports = client;