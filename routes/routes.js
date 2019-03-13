const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const db = require("../models/");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");

// GraphQL main endpoint
router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// post route for all contact form submits. posts to mlab in contact collection
router.post("/post", (req, res) => {
  db.Contacts.create(req.body)
    .then(response => {
      console.log(response);
      console.log("made it to router");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
