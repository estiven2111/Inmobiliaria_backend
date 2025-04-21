const { Router } = require("express");
const { OcrMiddeware, MapsMiddleware, CityMiddleware, TypePropertyMiddleware, PriceMinMaxMiddleWare } = require("../../middlewares");
const funciones = Router();

funciones.post("/ocr", OcrMiddeware);
funciones.get("/keyMap",MapsMiddleware)
funciones.get("/cities",CityMiddleware)
funciones.get("/tipes",TypePropertyMiddleware)
funciones.get("/minmax",PriceMinMaxMiddleWare)

module.exports = funciones;
