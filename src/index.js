const express = require('express');
const mongoose = require('mongoose');

const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');
const routes = require('./routes');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose
   .connect(`mongodb://localhost:27017/magic-movies`)
   .then(() => {
      console.log('DB connected');

      app.listen(
         port,
         console.log(`Server is listening on http://localhost:${port}...`)
      );
   })
   .catch((err) => console.error('Cannot connect to DB'));

// mongoose.connection.on('error', (err) => console.error(err));
