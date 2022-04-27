const inquirer = require("inquirer");
const menuOptions = [
  {
    type: "list",
    name: "option",
    message: `\n${
      "============================".blue
    } \n Seleccione una opcion\n${"============================ \n".blue}\n `,
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea.`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas.`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas.`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes.`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tareas.`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tareas.`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir.`,
      },
    ],
  },
];
const inquirerMenu = async () => {
  let opt = inquirer.prompt(menuOptions);
  return opt;
};
const pausa = async (opcion) => {
  const menuPause = {
    type: "input",
    name: "pausa",
    message: `Usted selecciono la opcion: ${opcion.green}, Presione la tecla ${
      "ENTER".green
    } para continuar.`,
  };
  await inquirer.prompt(menuPause);
};
const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  leerInput,
  inquirerMenu,
  pausa,
};
