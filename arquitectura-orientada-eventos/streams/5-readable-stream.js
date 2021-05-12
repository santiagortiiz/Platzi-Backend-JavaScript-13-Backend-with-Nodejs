const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableStream.push(null);

// Se añade el readable al writeable process.stdout
readableStream.pipe(process.stdout);