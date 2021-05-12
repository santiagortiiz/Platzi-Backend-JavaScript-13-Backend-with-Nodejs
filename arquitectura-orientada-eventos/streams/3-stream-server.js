const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // Los objetos readable stream permiten integrar un stream de escritura
  const src = fs.createReadStream('./big');
  src.pipe(res);
});

server.listen(3000);
