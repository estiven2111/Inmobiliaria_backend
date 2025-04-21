const { Router } = require("express");
const {
  FomrTomadorMiddleware, formValidationMiddleware
} = require("../../../middlewares");

const Formularios = Router();

Formularios.post("/aplica-tomador",FomrTomadorMiddleware)
Formularios.get("/validation",formValidationMiddleware)

module.exports = Formularios