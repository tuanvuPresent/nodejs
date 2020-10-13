'use strict';

const mysql = require('mysql');

//local mysql db connection
// const db = mysql.createConnection({
//     host: process.env.MY_SQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
// });
// connect to database
// db.connect(err => {
//     if (err) {
//         console.log(err);
//     }
// })
// posgres
const { Pool, Client } = require('pg')
var pg = require('pg');
var conString = process.env.DATABASE_URL
const db = new pg.Client(conString);
db.connect(err => {
    if (err) {
        console.log(err);
    }
})
module.exports = db;
