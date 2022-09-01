const express = require("express");
const app = express();
const port = 3003;

// create server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// set view engine show our app where to look for views

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  let payLoad = {
    pageTitle: "Dynamic page title",
  };
  res.status(200).render("home", payLoad);
});
