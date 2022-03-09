// Etape 1:

// Import d'express:
const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log("A request has been received");
    next();
});

// Middleware transformName:
function transformName(req, res, next) {
    req.body.name = req.body.name.toLowerCase();
    next();
}

const superHeros = [

    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },

    {
        name: "Thor",
        power: ["electricity", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },

    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }

]

// Etape 2 (les routes):

// Route qui renvoie la liste de tous les héros (objet complet):
app.get("/heroes", (req, res) => {
    res.json(superHeros);
});

// Route qui récupère un super héros grâce à son nom et renvoie ses informations (l'objet complet):
app.get("/heroes/:name", (req, res) => {
    const heros = superHeros.find((heros) => {
        return heros.name === req.params.name;
    });
    res.json({
        heros
    });
});

// Route qui récupère les pouvoirs d'un super héros grâce à son nom et renvoie ces derniers:
app.get("/heroes/:name/powers", (req, res) => {
    const heros = superHeros.find((heros) => {
        return heros.name === req.params.name;
    });
    res.json({
        power: heros.power
    });
});

// Route qui ajoute un super héros en utilisant la méthode POST et qui renvoie une réponse avec le message "Ok, héros ajouté":
app.post("/heroes", transformName, (req, res) => {
    superHeros.push({
        name: req.body.name,
        power: req.body.power,
        color: req.body.color,
        isAlive: req.body.isAlive,
        age: req.body.age,
        image: req.body.image,
    });
    res.send(
        "Ok, héros ajouté"
    );
});

// Route qui ajoute un pouvoir à un super héros en utilisant la méthode PATCH et qui renvoie une réponse avec le message "Pouvoir ajouté !":
app.patch("/heroes/:name/powers", (req, res) => {
    const heros = superHeros.find((heros) => {
        return heros.name === req.params.name;
    });
    console.log(heros);
    heros.power.push(req.body.power);
    res.send(
        "Pourvoir ajouté!"
    );
});


// Lancement du serveur:
app.listen(8000, () => console.log("Listening on port 8000"));