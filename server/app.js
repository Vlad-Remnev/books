require("dotenv").config();
const express = require('express');
const books = require("./books.json");

const app = express();
const PORT = process.env.PORT || 3001

app.get("/books", (req, res) => {
  res.json({
    items: books
  })
});

app.get("/books/:title", (req, res) => {
  res.json({
    item: books.find(book => book.title === req.params.title)
  })
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})