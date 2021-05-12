const fs = require("fs");

// Indica el directorio actual ./
// Se genera un archivo de logs
const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

// Console es una clase
// out: ruta destino de los logs
// err: ruta destino de los errores
const consoleFile = new console.Console(out, err);  

setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error("Ooops!"));
}, 2000);