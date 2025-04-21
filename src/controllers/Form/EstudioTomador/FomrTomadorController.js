const formularioTomador = require("../../../models/form/EstudioTomador/FormTomador");
// const fs = require("fs");
// const fs_extra = require("fs-extra");
// const path = require("path");
const { Storage } = require("@google-cloud/storage");
require("dotenv").config;
const {loadPhoto} =  require("../../../utils/cloudinary")
// const { PROJECT_ID, PRIVATE_KEY, CLIENT_EMAIL, BUCKETNAME } = process.env;
// const storage = new Storage({
//   keyFilename: "./keyimg.json", // Ruta a tus credenciales
//   projectId: "pruebadeploy-393802", // Cambia esto a tu ID de proyecto
// });

//todo este

// const storage = new Storage({
//   projectId: PROJECT_ID,
//   credentials: {
//     client_email: CLIENT_EMAIL,
//     private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
//   },
// });

// const bucketName = BUCKETNAME; // Cambia esto al nombre de tu bucket

const FomrTomadorController = async (req) => {
  try {
    let urls_img = [];
    let datos = req.body;

    const fomrexist = await formularioTomador.findOne({
      id_form: datos.id_form,
    });

    if (!fomrexist) {
      if (!req.files || Object.keys(req.files).length === 0) {
        // return "no hay archivos";
        console.log("no hay archivos");
      } else {
        // for (const key in req.files) {
        //   const archivo = req.files[key];
        //   console.log(archivo, "archhivo");
        //   const uploadedFile = archivo;
        //   const filePath = `${datos.nom_completo}/${uploadedFile.name}`;
        //   const uploadStream = storage
        //     .bucket(bucketName)
        //     .file(filePath)
        //     .createWriteStream();
        //   // const file = storage.bucket(bucketName).file(uploadedFile.name);
        //   const publicUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

        //   uploadStream.on("error", (err) => {
        //     console.log(err);
        //     return "error en la imagen";
        //   });

        //   uploadStream.on("finish", async () => {
        //     // console.log("finalizo la subida en segundo plano");
        //   });

        //   uploadStream.end(uploadedFile.data);
        //   console.log(datos);
        //   urls_img.push(publicUrl);
        //   datos = {
        //     ...datos,
        //     urls_img,
        //   };
        // }
        for (const key in req.files) {
          const archivo = req.files[key];
          console.log(archivo, "archhivo");
          // const url_img = await loadPhoto(archivo)
        }
        
      }
      const form = await new formularioTomador(datos);
      await form.save();
      return "guardado exitoso";
    } else {
      console.log("entro al else")
      return `el usuario ${fomrexist.nom_completo} ya  creo el formulario ${fomrexist.id_form} y el estado es ${fomrexist.estado}`;
    }
  } catch (error) {
    console.log(error);
  }
  //!estados del fomulario son // pendiente,revision,aceptado o rechazado
};

//! esto para immplementar la descarga de la imagen
// const dowloadImage = async () => {
//   //! aca debo poner el nombre del archivo o en su defecto la url de accesso para sacar el nombre
//   const url =
//     "https://storage.googleapis.com/arriendalobucket/targetas/jeugos/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpg";

//   // Obtén el nombre del archivo a partir de la URL
//   const nombreArchivo = url.substring(url.lastIndexOf("/") + 1);

//   const filePath =
//     "targetas/jeugos/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpg";
//   const file = storage.bucket(bucketName).file(filePath);
//   const data = await file.download();

//   res.setHeader("Content-disposition", "attachment; filename=" + nombreArchivo);
//   res.setHeader("Content-type", "image/jpeg");

//   // Envía los datos descargados como respuesta
//   return data[0];
// };

const moveImagen = () => {
  //TODO mover la imagen a una carpeta especifica
  // archivo.mv(`${uploadPath}`, (err) => {
  //   if (err) return res.status(500).send(err);
  //   const file = path.join(__dirname, "../../../..", "uploads", archivo.name);
  //todo ******************
  // fs.readFile(file, async function (err, data) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("la data es ", file);
  //   try {
  //     await bucket.upload(archivo.tempFilePath, {
  //       destination: filePath,
  //       public: true, // Establece el objeto como público
  //       metadata: { cacheControl: "public, max-age=31536000" }, // Establece las cabeceras de cache
  //     });
  //   } catch (err) {
  //     console.error("el errooooooooooooss",err);
  //     return "error";
  //   }
  //   uploadStream.end(archivo.data);
  //    //eliminar(file);
  // });
  // todo  });
  //TODO mover la imagen a una carpeta especifica
};

// const eliminar = (file) => {
//   if (fs_extra.existsSync(file)) {
//     fs_extra.unlink(file);
//   } else {
//     console.log("El archivo no existe:", file);
//   }
// };

module.exports = FomrTomadorController;
