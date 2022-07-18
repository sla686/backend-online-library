import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  isbn: { String, required: true },
  title: { String, required: true },
  description: { String, required: true },
  publisher: { String, required: true },
  authors: { String, required: true },
  status: { String, required: true },
  published_date: { String, required: true },
  borrower_id: { String },
  borrow_date: { String },
  return_date: { String },
});

const Book = mongoose.model("book", bookSchema);

export default Book;
