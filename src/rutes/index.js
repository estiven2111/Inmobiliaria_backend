const { Router } = require("express");
const users = require("./wasi/users");
const propertys = require("./wasi/propertys");
const funciones = require("./Funcionalidades/funciones");
const Formularios = require("./Form/EstudioTomador/FormToamdor");
const messenger = require("./mensajes/Whatsapp/SendWhatsapp");
// const puppeteer = require("puppeteer");

const router = Router();

router.use("/usersWasi", users);
router.use("/property", propertys);
router.use("/function", funciones);
router.use("/formulario", Formularios);
router.use("/mensajes", messenger);

//!pruebas scraping
// router.get("/scra", async (req, res) => {
//     (async () => {
//         try {
//           // Iniciar el navegador
//           const browser = await puppeteer.launch();

//           // Abrir una nueva página
//           const page = await browser.newPage();

//           // Navegar a la página que deseas hacer scraping
//           const url = 'https://arriendalo.com.co'; // Reemplaza 'ejemplo.com' con la URL que desees scrape
//           await page.goto(url);

//           // Aquí puedes interactuar con la página utilizando las herramientas de puppeteer
//           // Por ejemplo, puedes hacer clic en botones, llenar formularios, etc.

//           // Extraer la información que necesitas de la página
//           const data = await page.evaluate(() => {
//             // Este bloque de código se ejecutará en el contexto de la página web
//             // Puedes utilizar selectores de CSS para seleccionar elementos y extraer su contenido
//             const title = document.querySelector('h1').innerText;
//             const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText);
//             // const phoneRegex = /\+57\d{10}/g;

//             // // Obtener todos los párrafos del sitio web
//             // const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText);

//             // // Filtrar los números de teléfono utilizando la expresión regular
//             // const phoneNumbers = paragraphs.map(paragraph => paragraph.match(phoneRegex)).filter(match => match !== null);

//             // return phoneNumbers;
//             return {
//               title,
//               paragraphs,
//             };
//           });

//           // Imprimir la información extraída
//           console.log(data);
//       res.json(data)
//           // Cerrar el navegador
//           await browser.close();
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       })();

// //     const browser = await puppeteer.launch();
// //   const page = await browser.newPage();

// //   try {
// //     // Navegar a la página que deseas hacer scraping
// //     await page.goto('https://www.arriendalo.com.co');

// //     // Obtener el contenido que deseas extraer
// //     const data = await page.evaluate(() => {
// //       // Expresión regular para buscar números de teléfono en el texto
// //       const phoneRegex = /\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;

// //       // Obtener todo el contenido del sitio web
// //       const fullText = document.documentElement.textContent;

// //       // Buscar números de teléfono utilizando la expresión regular
// //       const phoneNumbers = fullText.match(phoneRegex);

// //       return phoneNumbers;
// //     });

// //     console.log(data);
// // res.json(data)
// //   } catch (error) {
// //     console.error('Error durante el scraping:', error);
// //   } finally {
// //     // Cerrar el navegador al terminar
// //     await browser.close();
// //   }
// });

module.exports = router;
