// %s: string
// %d: digit
// %j: json
console.log("Un %s y un %s", "perrito", "gatito");

console.info("hello world");
console.warn("hello error");

console.assert(42 == "42");
console.assert(42 === "42");

// Deja la ruta de la linea ejecutada
console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

// Se ejecuta al pasar la variable de entorno: NODE_DEBUG=foo node 2-console-utils.js
debuglog("hello from foo");