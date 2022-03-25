const express = require('express');
const router = express.Router();

const personSchema = require('../models/person_model');

/* Creacion de un usuario */
router.post('/person', (req, res) => {
    const person = personSchema(req.body);
    person
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

/* Listar todos los usuarios */
router.get('/', (req, res) => {
    personSchema.find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
/* Consultar un usuario especifico */
router.get('/:personId', (req, res) => {
    const { personId } = req.params
    personSchema.findById(personId)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
/* Editar un usuario especifico */
router.put('/:personId', (req, res) => {
    const { personId } = req.params;
    const { name, address = ({ city, code_zip }) } = req.body
    personSchema
        .updateOne({ _id: personId }, { $set: { name, address } })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
/* Eliminar un usuario especifico */
router.delete('/:personId', (req, res) => {
    const { personId } = req.params;
    personSchema
        .remove({ _id: personId })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



module.exports = router;