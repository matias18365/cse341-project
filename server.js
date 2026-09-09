const express = require('express');
const cors = require ('cors');
const app = express();
const mongodb = require('./db/connect');

app.use(cors());

const port = process.env.port || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log('Connection error in MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Server running on port ${port} and DB was initialized`);
        });
    }
});
