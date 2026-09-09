const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Route to Get all contacts (GET /contacts)
router.get('/', contactsController.getAll);

// route to Get contact record by ID (GET /contacts/:id)
router.get('/:id', contactsController.getSingle);

module.exports = router;