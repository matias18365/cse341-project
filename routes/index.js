const express = require('express');
const router = express.Router();
//TestingRoute
router.get('/', (req, res) => {res.send('Hello World');});

//takes traffic /contacts to the file in routes/contacts.js
router.use('/contacts', require('./contacts'));

module.exports = router