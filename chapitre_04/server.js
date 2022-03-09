// Import d'express:
const express = require("express");
const app = express();
const userRouter = require("./routers/usersRouter.js")

// Déclaration qui permet des réponses en json:
app.use(express.json());

// Import des routes:
app.use("/users", userRouter);

// Création du serveur:
app.listen(8000, () => console.log("Listening on port 8000..."));

