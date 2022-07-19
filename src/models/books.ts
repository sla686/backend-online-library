import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  published_date: {
    type: String,
    required: true,
  },
  borrower_id: String,
  borrow_date: String,
  return_date: String,
});

const Book = mongoose.model("book", bookSchema);

export default Book;
