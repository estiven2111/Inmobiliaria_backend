const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./rutes/index");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(fileupload())

app.use("/", router);


module.exports = app;
