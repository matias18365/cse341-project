const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Route to Get all contacts (GET /contacts)
router.get('/', contactsController.getAll);

// route to Get contact record by ID (GET /contacts/:id)
router.get('/:id', contactsController.getSingle);

//route to create a new contact record (POST /contacts)
router.post('/', contactsController.createContact);

//route to update an existing contact record (PUT /contacts/:id)
router.put('/:id', contactsController.updateContact);


//route to delete a contact record by ID (DELETE /contacts/:id)
router.delete('/:id', contactsController.deleteContact);


module.exports = router;
