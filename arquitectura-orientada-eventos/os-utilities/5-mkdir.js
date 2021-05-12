const fs = require("fs");

// recursive:true permite crear los directorios que no existan
fs.mkdir("platzi/escuela-js/node", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});
