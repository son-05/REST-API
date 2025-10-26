const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware for JSON parsing

// In-memory book storage
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// GET: Fetch all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// POST: Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json({ message: "Book added", book: newBook });
});

// PUT: Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[bookIndex] = { id: bookId, ...req.body };
  res.status(200).json({ message: "Book updated", book: books[bookIndex] });
});

// DELETE: Remove book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.status(200).json({ message: "Book deleted" });
});

// Run server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
