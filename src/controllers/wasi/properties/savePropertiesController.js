const axios = require("axios");
require("dotenv").config();
const { typeproperty } = require("./propertyMethos");
const { db } = require("../../../db");
const propiedades = require("../../../models/Propiedades/Property");
const user = require("../../../models/Personas/User/User");
const { WASI_ID_COMPANY, WASI_TOKEN } = process.env;

const savePropertiesController = async (req) => {
  const { page } = req.query;
  let allProperty = [];
  let result = [];
  let pageProperty = [];
  let cont;
  let response;

  //!Borrar la base de datos pero solo los datos un truncate
  // if (db.db.listCollections({ name: "properties" }).filter.name) {
  //   console.log("borra");
  //   db.dropCollection("properties");
  // }

  //!validar si existe la base de datos
  // const collectionName = "properties";

const collections = await db.db.listCollections().toArray();
const collectionExists = collections.some((collection) => collection.name === "properties");

console.log(collectionExists)

//! validar si hay datos en la base de datos
// const collectionNames = "properties";
const collection = db.collection("properties");

const document = await collection.findOne();


//!validar si la base de datos tiene datos y obtener el numero de datos
const collectionName = "properties";
const collection2 = db.collection(collectionName);

const count = await collection2.countDocuments();

// console.log(`La cantidad de documentos en la colección ${collectionName} es: ${count}`);

// if (collectionExists) {
//   for (let m = 0; m < page; m++) {
//     cont = 0;
//     response = await axios.get(
//       `https://api.wasi.co/v1/property/search?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}&id_status_on_page=5&skip=${m}`
//     );

//     allProperty = [...allProperty, response.data];
//   }
//   // for (let i = 0; i < allProperty.length; i++) {
//   //   let item = allProperty[i];

//   //   for (let key in item) {
//   //     if (key === "status" || key === "total") {
//   //     } else {
//   //       if (item.hasOwnProperty(key)) {
//   //         const idResponsable = await user.findOne({
//   //           id_user: item[key].id_user,
//   //         });

//   //      const nombre = idResponsable.first_name
//   //      const id_propiedad = item[key].id_property
//   //      const cell_phone = idResponsable.cell_phone
//   //      const linkText = "Haz clic aquí"
//   //      const linkURL = `https://arriendalo.com.co/propiedades/${id_propiedad}`
//   //      const celeanNumber = cell_phone.replace(/\D/g, '');
//   //       const formattedPhoneNumber = `+${celeanNumber}`;
//   //       const message = `hola ${nombre} me intresa obtener informacion sobre la propiedad con codigo ${id_propiedad}`
//   //       const encodedMessage = encodeURIComponent(`${message}\n${linkText}: ${linkURL}`);
//   //       const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
//   //       // const whatsappLink = `https://api.whatsapp.com/send?phone=${celeanNumber}&text=${encodedMessage}`;
          
//   //         const userupdate = await user.updateOne(
//   //           { id_user: idResponsable.id_user },
//   //           { whatsapp: whatsappLink }
//   //         );
//   //         console.log(userupdate)
//   //         const banos = item[key].bathrooms.replace(">","")
//   //         const habi = item[key].bedrooms.replace(">","")
//   //         item[key] = {
//   //           ...item[key],
//   //           rent_price:Number(item[key].rent_price),
//   //           bathrooms:Number(banos),
//   //           bedrooms:Number(habi),
//   //           garages:Number(item[key].garages),
//   //           floor:Number(item[key].floor),
//   //           stratum:Number(item[key].stratum),
//   //           mascotas: false,
//   //           amoblada: false,
//   //           llaves: false,
//   //           admin: false,
//   //           user: idResponsable._id,
//   //         };

//   //         const exis = await propiedades.findOne({
//   //           id_property: item[key].id_property,
//   //         });
//   //         if (exis) {
//   //           console.log("existe. el id", item[key].id_property);
//   //         } else {
//   //           const property = await new propiedades(item[key]);
//   //           await property.save();
//   //           result.push(item[key]);
//   //         }
//   //       }
//   //     }
//   //   }
//   }



// const propertyData = {
//   id_property: 1001,
//   id_company: 10,
//   id_user: 501,
//   for_sale: true,
//   for_rent: true,
//   for_transfer: false,
//   for_temporary_rent: false,
//   id_property_type: 2,
//   id_country: 57,
//   country_label: "Colombia",
//   id_region: 11,
//   region_label: "Antioquia",
//   id_city: 11001,
//   city_label: "Medellín",
//   id_location: 101,
//   location_label: "El Poblado",
//   id_zone: 9,
//   zone_label: "Milla de Oro",
//   id_currency: 1,
//   iso_currency: "COP",
//   title: "Apartamento moderno en el corazón de Medellín",
//   address: "Cra 43A #7-50",
//   area: "95",
//   id_unit_area: "m2",
//   unit_area_label: "Metros cuadrados",
//   built_area: "95",
//   id_unit_built_area: "m2",
//   unit_built_area_label: "Metros cuadrados",
//   private_area: "85",
//   id_unit_private_area: "m2",
//   unit_private_area_label: "Metros cuadrados",
//   maintenance_fee: "300000",
//   maintenance_fee_label: "COP",
//   sale_price: "750000000",
//   sale_price_label: "COP",
//   rent_price: 3500000,
//   rent_price_label: "$3.500.000",
//   bedrooms: 3,
//   bathrooms: 2,
//   garages: 1,
//   floor: 5,
//   stratum: 6,
//   observations: "Apartamento amplio con excelente vista, cerca a centros comerciales y restaurantes.",
//   video: "https://www.youtube.com/watch?v=demoVideo",
//   id_property_condition: "new",
//   property_condition_label: "Nuevo",
//   map: "https://maps.google.com/example-link",
//   latitude: "6.2088",
//   longitude: "-75.5675",
//   building_date: "2020",
//   created_at: "2025-04-18T10:00:00Z",
//   updated_at: "2025-04-18T12:00:00Z",
//   reference: "REF-APT-MDE-2025",
//   id_rents_type: "monthly",
//   rents_type_label: "Mensual",
//   zip_code: "050021",
//   id_label: "promo",
//   label: "En promoción",
//   label_color: "#FF5733",
//   main_image: {
//     url: "https://example.com/images/apt1.jpg",
//     alt: "Fachada principal del apartamento"
//   },
//   registration_number: "REG123456",
//   id_status_on_page: "active",
//   status_on_page_label: "Activo",
//   id_publish_on_map: "yes",
//   publish_on_map_label: "Publicado",
//   network_share: true,
//   visits: 123,
//   comment: "Ideal para familias pequeñas o parejas.",
//   id_availability: "available",
//   availability_label: "Disponible",
//   owner: "Carlos Pérez",
//   galleries: {
//     images: [
//       { url: "https://example.com/images/apt1.jpg", alt: "Sala principal" },
//       { url: "https://example.com/images/apt2.jpg", alt: "Cocina equipada" }
//     ]
//   },
//   features: {
//     balcony: true,
//     elevator: true,
//     security: true,
//     pool: false
//   },
//   link: "https://miportal.com/inmueble/1001",
//   mascotas: true,
//   amoblada: true,
//   megusta: 58,
//   llaves: true,
//   admin: false,
//   whatsapp: "+573001234567"
// };


const propertyData = {
  id_property: 6921799,
  id_company: 15338500,
  id_user: 184566,
  for_sale: false,
  for_rent: true,
  for_transfer: false,
  for_temporary_rent: false,
  id_property_type: 1,
  id_country: 1,
  country_label: "Colombia",
  id_region: 15,
  region_label: "Cundinamarca",
  id_city: 794,
  city_label: "Bogotá D.C.",
  id_location: 11,
  location_label: "Suba",
  id_zone: 538901,
  zone_label: "Colina Campestre",
  id_currency: 1,
  iso_currency: "COP",
  title: "Calle 134, Gratamira",
  address: "Calle 134 Bis # 89 A 05 Quintas De Provenza",
  area: "106",
  id_unit_area: 1,
  unit_area_label: "M2",
  built_area: "106",
  id_unit_built_area: 1,
  unit_built_area_label: "M2",
  private_area: "106",
  id_unit_private_area: 1,
  unit_private_area_label: "M2",
  maintenance_fee: "0",
  maintenance_fee_label: "$0",
  sale_price: "0",
  sale_price_label: "$0",
  rent_price: 3200000,
  rent_price_label: "$3.200.000",
  bedrooms: 3,
  bathrooms: 3,
  garages: 2,
  floor: 3,
  stratum: 4,
  video: "",
  id_property_condition: 2,
  property_condition_label: "Used",
  map: "4.7324579,-74.085098",
  latitude: "4.7324579",
  longitude: "-74.085098",
  building_date: "16",
  created_at: "2023-09-05 17:00:43",
  updated_at: "2023-09-26 15:03:58",
  reference: "",
  id_rents_type: 4,
  rents_type_label: "Monthly",
  zip_code: "",
  id_label: "",
  label: "",
  label_color: "",
  main_image: {
    id_gallery: 6274094,
    id_image: 217803448,
    url: "https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nMTEwMTUxMTAyMDIzMDkwNTA0NDQxOS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6NTU1LCJoZWlnaHQiOjQxNiwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    filename: "1101511020230905044419.jpeg",
    position: 1,
    url_big: "https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9nMTEwMTUxMTAyMDIzMDkwNTA0NDQxOS5qcGVnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    url_original: "https://staticw.s3.amazonaws.com/inmuebles/1101511020230905044419.jpeg"
  },
  status_on_page_label: "Active",
  id_publish_on_map: 3,
  publish_on_map_label: "Post exact point",
  network_share: false,
  visits: 0,
  comment: "No Mascotas",
  id_availability: 1,
  availability_label: "Available",
  owner: "own",
  features: {
    internal: [
      { id: 5, nombre: "Balcón" },
      { id: 6, nombre: "Baño auxiliar" },
      { id: 82, nombre: "Baño en habitación principal" },
      { id: 7, nombre: "Biblioteca/estudio" },
      { id: 12, nombre: "Calentador" },
      { id: 13, nombre: "Chimenea " },
      { id: 14, nombre: "Citófono / intercomunicador" },
      { id: 98, nombre: "Clósets" },
      { id: 85, nombre: "Cocina equipada" },
      { id: 16, nombre: "Cocina integral" },
      { id: 9, nombre: "Hall  de alcobas" },
      { id: 20, nombre: "Zona de lavandería" }
    ],
    external: [
      { id: 49, nombre: "Acceso pavimentado" },
      { id: 78, nombre: "Área social" },
      { id: 35, nombre: "Garaje" },
      { id: 43, nombre: "Portería / recepción" },
      { id: 39, nombre: "Salón comunal" },
      { id: 48, nombre: "Vigilancia" }
    ]
  },
  link: "https://marketplace.arriendalo.com.co/casa-arriendo-colina-campestre-bogota-dc/6921799",
  amoblada: false,
  llaves: false,
  admin: false,
  whatsapp: "https://wa.me/+573214115665?text=hola%20Liliana%20Andrea%20me%20intresa%20obtener%20informacion%20sobre%20la%20propiedad%20con%20codigo%206921799%0AHaz%20clic%20aqu%C3%AD%3A%20https%3A%2F%2Farriendalo.com.co%2Fpropiedades%2F6921799"
};



  const property = await new propiedades(propertyData);
  await property.save();


return "datos guardados con exito";









  // let images = [];
  // result.map(async (pro) => {
  //   pro.galleries?.map((img) => {
  //     for (const key in img) {
  //       if (key !== "id") {
  //         images.push(img[key].url);
  //       }
  //     }
  //   });

    // const tipoPropiedad = typeproperty(
    //   pro.id_property_type,
    //   pro.status_on_page_label
    // );
    // pageProperty.push({
    //   id_propiedad: pro.id_property,
    //   titulo: pro.title, //? devuelve el nombre de la ubicacion
    //   codigo: pro.id_property,
    //   tipo: tipoPropiedad.inmueble,
    //   direccion: pro.address,
    //   ciudad: pro.city_label,
    //   barrio: pro.zone_label,
    //   habitaciones: pro.bedrooms,
    //   metros_cuadrados: pro.area, //? se manejan 3 arear contruida,terreno y privada
    //   area_contruida: pro.built_area,
    //   area_privada: pro.private_area,
    //   exclusivo: tipoPropiedad.exclusivo,
    //   garajes: pro.garages,
    //   baños: pro.bathrooms,
    //   piso: pro.floor,
    //   estracto: pro.stratum,
    //   map: pro.map,
    //   latitud: pro.latitude,
    //   longitud: pro.longitude,
    //   precio_arriendo: pro.rent_price_label,
    //   fecha_creada: pro.created_at,
    //   imagenes: images,

    // });
    // images = [];
    // console.log(Object.keys(response.data).length,cont++)
    // console.log(response.data[0].id_property)
  // });
//   return "Datos guardados con exito";
// }else{
//   return "la base de datos no existe valida tu base de datos que tenga la coleccion"
// }
  

 
};

module.exports = savePropertiesController;
