const { Writable } = require("stream");

const writableStream = new Writable({
  // Constructor
  write(chunk, encoding, callback) {
    // chunk: buffer
    console.log(chunk.toString());
    callback();
  }
});

// Los writable streams deben estar añadidos a un readable stream por lo que podemos realizar la prueba de lectura con process.stdin
process.stdin.pipe(writableStream);
