const express = require("express");
const app = express();

const authors = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// Exercice 1
app.get("/", (req, res) => {
    res.send("Authors API")
})

// Exercice 2
app.get("/authors/:authorsId", (req, res) => {
    const author = authors.find((author) => {
        return author.id.toString() === req.params.authorsId;
    })
    res.send(`${author.name}, ${author.nationality}`)
})

// Exercice 3
app.get("/authors/:authorsId/books", (req, res) => {
    const author = authors.find((author) => {
        return author.id.toString() === req.params.authorsId;
    })
    // console.log(author);
    res.send(`${author.books.join(", ")}`);
})

// Exercice 4
app.get("/json/authors/:id", (req, res) => {
    const author = authors.find((author) => {
        return author.id.toString() === req.params.id;
    })
    res.json({
        name: author.name,
        nationality: author.nationality,
    })
})

app.get("/json/authors/:id/books", (req, res) => {
    const author = authors.find((author) => {
        return author.id.toString() === req.params.id;
    })
    res.json({
        books: author.books,
    })
})






app.listen(8000, () => {
    console.log("Listening on port 8000");
})