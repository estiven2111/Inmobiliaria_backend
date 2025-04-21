const { Schema, model } = require("mongoose");

const FormTomadorShema = new Schema(
  {
    id_form: {
      type: String,
      unique: true,
      allowNull: false,
    },
    persona: {
      type: String,
      allowNull: false,
    },
    cod_inmueble: {
      type: String,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
    },
    nom_completo: {
      type: String,
      allowNull: false,
    },
    tipo_doc: {
      type: String,
      allowNull: false,
    },
    num_doc: {
      type: String,
      allowNull: false,
    },
    num_whatsapp: {
      type: String,
      allowNull: false,
    },
    pais: {
      type: String,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: String,
      allowNull: false,
    },
    otras_personas: {
      type: String,
      allowNull: false,
    },
    datos_personas: {
      type: Array,
      allowNull: true,
    },
    mascotas: {
      type: String,
      allowNull: false,
    },
    datos_mascotas: {
      type: Array,
      allowNull: true,
    },
    autorizacion_datos: {
      type: String,
      allowNull: false,
    },
    act_economica: {
      type: String,
      allowNull: false,
    },
    datos_act_econimoca: {
      type: Array,
      allowNull: true,
    },
    ingresos: {
      type: String,
      allowNull: false,
    },
    egresos: {
      type: String,
      allowNull: false,
    },
    datos_referencias: {
      type: Array,
      allowNull: true,
    },
    urls_img: {
      type: Array,
      allowNull: true,
    },
    estado: {
      type: String,
      allowNull: true,
      default: "pendiente",
    },
  },
  {
    default_language: "spanish",
    collation: { locale: "es", strength: 2 },
  }
);

const modelFormTomador = model("formtomador", FormTomadorShema);
module.exports = modelFormTomador;
