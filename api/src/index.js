const express = require("express");
const server = express();
const PORT = 3000;
const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

console.log(process.env.PG_CONNECTION_STRING);

initialiseTables();
async function initialiseTables() {
  await pg.schema.hasTable("test").then(async (exists) => {
    if (!exists) {
      await pg.schema
        .creatTable("test", (table) => {
          table.string("ID").unique().primary();
        })
        .then(async () => {
          console.log("created table");
        })
    } else {
      console.log("table test exists")
    }
  })
}

const owners = [{
  name: "hello",
  email: "hello@ehb.be"
}];

/**
 * [GET] /
 * returns "hello world" upon get request
 * @returns {object} with "message" param containing "hello world"
 */
server.get("/", (req, res) => {
  res.send({
    message: "hello world"
  })
})

/**
 * [GET] /owner 
 * @returns {Object} current owner object
 */
server.get("/owner", (req, res) => {
  res.json(owner);
})

server.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});