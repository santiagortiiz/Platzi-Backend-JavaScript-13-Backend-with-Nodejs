const os = require('os');

// Informacion de los nucleos
console.log("CPU info", os.cpus());

// Muestra la direccion de la MAC address y la IP
console.log("IP address", os.networkInterfaces())

// Memoria disponible en bytes
console.log("Free memory", os.freemem());

// Tipo del sistema operativo
console.log("Type", os.type());

// Version del SO
console.log("SO version", os.release());

// Informacion del usuario
console.log("Usr info", os.userInfo());
