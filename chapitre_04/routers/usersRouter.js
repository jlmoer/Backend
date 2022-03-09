// Import de Joi:
const Joi = require("joi");


// Import d'express:
const express = require("express");
const router = express.Router();

// Création du schéma Joi:
const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(4)
        .max(30)
        .required(),

    email: Joi.string()
        .alphanum()
        .required(),

    city: Joi.string()
        .alphanum()
        .required(),

})

// Création de la variable qui contient les utilisateurs:
const users = [

    {
        id: 1,
        username: "Alex",
        age: 20,
        gender: "M",
        email: "alex@gmail.com",
        city: "Paris",
    },

    {
        id: 2,
        username: "Marie",
        age: 25,
        gender: "F",
        email: "marie@gmail.com",
        city: "Lyon",
    },

    {
        id: 3,
        username: "Pierre",
        age: 30,
        gender: "M",
        email: "pierre@gmail.com",
        city: "Bordeaux",
    },

    {
        id: 4,
        username: "Elise",
        age: 27,
        gender: "F",
        email: "elise@gmail.com",
        city: "Lille",
    },

    {
        id: 5,
        username: "Maxime",
        age: 32,
        gender: "M",
        email: "maxime@gmail.com",
        city: "Nantes",
    },

    {
        id: 6,
        username: "Paola",
        age: 22,
        gender: "F",
        email: "paola@gmail.com",
        city: "Menton",
    }

];

// Création des routes:
// Route GET qui renvoie tous les utilisateurs:
router.get("/", (_req, res) => {
    res.json(users);
});

// Route POST pour ajouter un utilisateur:

router.post("/", (req, res) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).json({
            message: validationResult.error,
        });
    }
    users.push({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    });
    res.json("Utilisateur ajouté");
});

// Route GET qui enverra les informations d'un utilisateur selon son username:
router.get("/:username", (req, res) => {
    const user = users.find((user) => {
        return user.username === req.params.username;
    });
    res.json({
        user
    })
});

// Route GET qui envoie les informations d'un utilisateur selon son id:
router.get("/id/:id", (req, res) => {
    const user = users.find((user) => {
        return user.id === parseInt(req.params.id);
    });
    res.json({
        user
    });
});

// Rpute GET qui envoie les informations d'un utilisateur selon son email:
router.get("/email/:email", (req, res) => {
    const user = users.find((user) => {
        return user.email === req.params.email;
    });
    res.json({
        user
    })
});

// Export des modules:
module.exports = router;