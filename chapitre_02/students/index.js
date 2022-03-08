const express = require("express");
const app = express();

app.use(express.json());

// Etape 1:

const students = [

    {
        id: 1,
        name: "Alex",
        age: 20,
        gender: "M",
    },

    {
        id: 2,
        name: "Marie",
        age: 25,
        gender: "F",
    },

    {
        id: 3,
        name: "Pierre",
        age: 30,
        gender: "M"
    },

    {
        id: 4,
        name: "Elise",
        age: 27,
        gender: "F",
    },

    {
        id: 5,
        name: "Maxime",
        age: 32,
        gender: "M",
    },

    {
        id: 6,
        name: "Paola",
        age: 22,
        gender: "F",
    }

];

// Routes:

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    students.push({
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    })
    res.json(students);
})





























app.listen(8000, () => console.log("Listening on port 8000"));