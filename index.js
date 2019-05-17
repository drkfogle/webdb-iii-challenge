const express = require("express");

const helmet = require("helmet");

const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "cohorts.db3"
  },
  useNullAsDefault: true
};

const db = knex(knexConfig);

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/api/cohorts", (req, res) => {
  db("cohorts")
    .then(queso => {
      res.status(200).json(queso);
    })
    .catch(err => {
      console.log(err);
    });
});

server.listen(8000, () => console.log("API up and running on 8K"));
