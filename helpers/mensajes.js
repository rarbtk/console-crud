const colors = require("colors");

const showMenu = async () => {
  return new Promise(resolve => {
    console.log("============================".blue);
    console.log("  Seleccione una opcion: ");
    console.log("============================ \n".blue);
    console.log("1.".green + " Crear tarea.");
    console.log("2.".green + " Listar tareas.");
    console.log("3.".green + " Listar tareas completadas.");
    console.log("4.".green + " Listar tareas pendientes.");
    console.log("5.".green + " Completar tareas.");
    console.log("6.".green + " Borrar tareas.");
    console.log("0.".green + " Salir. \n");
   
    const readline = require("readline").createInterface(
        process.stdin,
        process.stdout
      );
 
    readline.question(`seleccione una ${"OPCION: ".green}`, (respuesta) => {
        readline.close()
        resolve(respuesta);
    }
    );
  });
};


const pausa = async()=>{

return new Promise((resolve)=>{
    const readline = require("readline").createInterface(
        process.stdin,
        process.stdout
      );
   
      readline.question(
        `Presione ${"ENTER".green} para continuar`,
        (respuesta) => {
        readline.close()
        resolve();
     }
  );
})
  
}

module.exports = {
  showMenu,
  pausa
};

