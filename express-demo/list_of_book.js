const express = require('express');
const router = express.Router();
const books = require('./books.json');

// Get all the books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find((ele) => ele.id === parseInt(id));

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  books.push(body);
  res.status(201).json({ message: 'The book has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let found = false;

  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books[index] = { ...book, ...body };
      found = true;
    }
  });

  if (found) {
    res.json({ message: `The book with ID ${id} has been updated` });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id === parseInt(id));

  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: `Book with id #${id} has been deleted` });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

const app = express();
app.use(express.json());
app.use('/books', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
