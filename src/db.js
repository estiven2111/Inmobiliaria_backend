const mongoose = require("mongoose");
require("dotenv").config();
const { DBUSER, DBPASSWORD, DBNAME } = process.env;
const db = mongoose.connection;
// console.log(DBUSER, DBPASSWORD, DBNAME)
mongoose
  .connect(
    `mongodb+srv://${DBUSER}:${DBPASSWORD}@${DBNAME}/?retryWrites=true&w=majority`,
    // mongodb+srv://estivenamartinez:<db_password>@cluster0.cskmjvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => console.log(err)); //? llamar el error de conexion una forma
//! on se ejecuta siempre  y once se ejecuta una vez
db.once("open", () => {
  console.log("conectado");
});
db.on("error", () => {
  //? llamar el error de conexion otra forma
  console.log("error de conexion a mongose");
});

module.exports = { db, mongoose};
//todo  ******************************************************
