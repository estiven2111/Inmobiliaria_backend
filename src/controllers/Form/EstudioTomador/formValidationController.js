const formularioTomador = require("../../../models/form/EstudioTomador/FormTomador");
const formValidationController = async(req) =>{
    const {id_form} = req.query
    const fomrexist = await formularioTomador.findOne({
        id_form,
      });
console.log("fffffffffffffffffffff")
      if (!fomrexist) {
        return `el formulario no existe puede seguir`;
     }else{
        return `el usuario ${fomrexist.nom_completo} ya  creo el formulario ${fomrexist.id_form} y el estado es ${fomrexist.estado}`;
     }
   

}

module.exports = formValidationController