import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IBook {
  title: string;
  author: string;
  ISBN: string;
  firstAddedDate: Date;
  isBorrowed: boolean;
  issuedTo: string;
  category: string;
  shelf: String;
  rack: String;
  index: Number;
}

const BooksSchema = new Schema({
  title: String,
  author: String,
  ISBN: String,
  additionDate: Date,
  isBorrowed: Boolean,
  issuedTo: String,
  category: String,
  shelf: String,
  rack: String,
  index: Number,
});

export const BooksModel = mongoose.model("books", BooksSchema);

export const addBook = (book: IBook) => {
  let bookData = new BooksModel();
  bookData.title = book.title;
  bookData.author = book.author;
  bookData.ISBN = book.ISBN;
  bookData.additionDate = book.firstAddedDate;
  bookData.isBorrowed = book.isBorrowed;
  bookData.issuedTo = "";
  bookData.category = "";
  bookData.shelf = "";
  bookData.rack = "";
  bookData.index = 0;
  return bookData.save();
};

export const updateBook = (revisedBook: IBook) => {
  // Find the previous book
  let existingBook = BooksModel.find({ ISBN: revisedBook.ISBN });
  return existingBook;
};

export const findBooks = (ISBN: string) => {
  let existingBook = BooksModel.find({ ISBN: ISBN });
  return existingBook;
};
