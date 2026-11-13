
const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// Create a new book
router.post("/create", bookController.createBook);

// Get all books
router.get("/getAll", bookController.getAllBooks);

// Update a book
router.put("/update/:id", bookController.updateBook);

// Delete a book
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;
