const colors = require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const fs = require("fs");
/*---------------------------*/
const main = async () => {
  let opt = "";
  let tareas = new Tareas();
  do {
    console.clear();
    opt = await inquirerMenu();
    switch (opt.option) {
      case "1":
        const desc = await leerInput("descripcion: ");
        tareas.crear(desc);
        fs.writeFileSync("./Tareas.json", JSON.stringify(tareas.__listado), {
          encoding: "utf8",
        });
        break;
      case "2":
        tareas.__listado.forEach((Element) => {
          if (Element.completado == true) {
            console.log(
              `id: ${Element.id.green} Description: ${
                Element.desc.green
              } State: ${"Completed".green} \n`
            );
          } else {
            console.log(
              `id: ${Element.id.green} Description: ${
                Element.desc.green
              } State: ${"Uncompleted".red}\n`
            );
          }
        });

        break;
      case "3":
        tareas.__listado.forEach((Element) => {
          if (Element.completado == true) {
            console.log(
              `id: ${Element.id.green} Description: ${
                Element.desc.green
              } State: ${"Completed".green} \n`
            );
          }
        });
        break;
      case "4":
        tareas.__listado.forEach((Element) => {
          if (Element.completado != true) {
            console.log(
              `id: ${Element.id.green} Description: ${
                Element.desc.green
              } State: ${"Uncompleted".red}\n`
            );
          }
        });
        break;
      case "5":
        tareas.__listado.forEach((Element) => {
          if (Element.completado != true) {
            console.log(
              `id: ${Element.id.green} Description: ${
                Element.desc.green
              } State: ${"Uncompleted".red}\n`
            );
          }
        });
        const descr = await leerInput("descripcion de la tarea a completar: ");
        tareas.completar(descr);
        fs.writeFileSync("./Tareas.json", JSON.stringify(tareas.__listado), {
          encoding: "utf8",
        });
        break;
      case "6":
        console.log(tareas.__listado);
        const descri = await leerInput("Que tarea quieres eliminar: ");
        tareas.eliminar(descri);
        fs.writeFileSync("./Tareas.json", JSON.stringify(tareas.__listado), {
          encoding: "utf8",
        });
    }
    await pausa(opt.option);
  } while (opt.option != "0");
};

main();
