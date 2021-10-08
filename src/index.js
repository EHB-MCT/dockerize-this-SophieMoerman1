const express = require("express");
const server = express();
const PORT = 3000;

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
  res.send({ message: "hello world" })
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