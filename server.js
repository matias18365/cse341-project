const express = require('express');
const cors = require('cors');
const app = express();
const mongodb = require('./db/connect');

//Setting for Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.port || 3000;


// Middlewares
app.use(cors());
app.use(express.json()); //to process json requests (POST / PUT)

//routes for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Main routes
app.use('/', require('./routes'));


//Initialize DB
mongodb.initDb((err) => {
  if (err) {
    console.log('Connection error in MongoDB:', err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port} and DB was initialized`);
    });
  }
});
