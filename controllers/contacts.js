const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//Get All contact records
const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('cse341project').collection('contact').find();
        result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Get a contact record by ID
const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('cse341project').collection('contact').find({ _id: userId });
        
        result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAll, getSingle };