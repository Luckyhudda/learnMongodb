const express = require("express");
const app = express();
app.use(express.json());
const curdRoute = require("./routes/crud");

app.use("/crud", curdRoute);

module.exports = app;
