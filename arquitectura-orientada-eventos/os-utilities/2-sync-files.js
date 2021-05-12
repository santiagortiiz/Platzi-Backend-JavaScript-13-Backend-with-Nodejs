const fs = require("fs");

try {
  // Captura de parametros provenientes de la terminal
  // argv[0]: node
  // argv[1]: file_name
  const file = process.argv[2]; // parametros

  const content = fs.readFileSync(file).toString();

  const lines = content.split("\n").length;
  console.log(lines);
} catch (err) {
  console.log(err);
}
