const { config } = require('./config/index')

const express = require('express');
const app = express();

// Middleware
app.use(express.json())   // Body-parser

const {
  logErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');
app.use(logErrors);
app.use(errorHandler);

const moviesApi = require('./routes/movies')
moviesApi(app)

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// app.get('/json', function(req, res) {
//   res.json({ hello: 'world' });
// });

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
