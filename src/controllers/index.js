const AllUsersController = require("./wasi/Users/AllUsersController");
const SaveUsersController = require("./wasi/Users/SaveUsersController")
const AuthController = require("./wasi/Autentication/AuthController");
const AllClientscontroller = require("./wasi/Users/AllClientscontroller");

//? Ruteo propiedades
const AllPropertyController = require("./wasi/properties/AllPropertyController");
const PagePropertyController = require("./wasi/properties/PagePropertyController");
const LandingPropertyController = require("./wasi/properties/LandingPropertyController")
const DetailPropertyController = require("./wasi/properties/DetailPropertyController");
const savePropertiesController = require("./wasi/properties/savePropertiesController");

//? Filtros

const SearchPropertiesController = require("./wasi/properties/SearchPropertiesController") 



//? FUNCIONALIDADES
const OcrController = require("./Funcionalidades/OCR/OcrController")
const MapsController = require("./Funcionalidades/Maps/MapsController")
const CityController = require("./Funcionalidades/properties/CityController")
const TypePropertyController = require("./Funcionalidades/properties/TypePropertyController")
const PriceMinMaxController = require("./Funcionalidades/properties/PriceMinMaxController")

  //? FORMULARIOS

const FomrTomadorController = require("./Form/EstudioTomador/FomrTomadorController")
const formValidationController = require("./Form/EstudioTomador/formValidationController")

//? MENSAJERIA

const SendWhatsappController = require("./mensajes/Whatsapp/SendWhatsappController")

module.exports = {
  AllUsersController,
  SaveUsersController,
  AuthController,
  AllClientscontroller,

  //?propiedades
  AllPropertyController,
  PagePropertyController,
  LandingPropertyController,
  DetailPropertyController,
  savePropertiesController,

  //?Filtros
  SearchPropertiesController,
  CityController,
  TypePropertyController,
  PriceMinMaxController,

  //? FUNCIONALIDADES
  OcrController,
  MapsController,

  //? fFORMULARIO
  FomrTomadorController,
  formValidationController,

  //? MENSAJERIA
  SendWhatsappController
};
