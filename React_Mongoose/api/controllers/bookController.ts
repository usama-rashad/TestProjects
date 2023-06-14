import { Request, Response } from "express";
import { BooksModel, addBook, findBooks, IBook } from "./../db/schema/Books";

const updateBookController = (req: Request, res: Response) => {
  let { title, author, ISBN, newISBN } = req.body;
  if (ISBN === undefined) {
    return res.status(400).json({ error: "ISBN must be entered" });
  }
  // Look for a previous book with the ISBN
  findBooks(ISBN).then((books) => {
    // Books found
    if (books.length === 1) {
      let existingBook = books[0];
      // existingBook.title = title;
      // existingBook.author = author;
      let revisedISBN = newISBN === undefined ? existingBook.ISBN : newISBN;
      // existingBook.issuedTo = newISBN === undefined ? existingBook.ISBN : newISBN;
      // Update the book information
      let bookDBID = books[0].id;
      console.log(bookDBID);
      BooksModel.findOneAndUpdate({ _id: bookDBID }, { $set: { ISBN: revisedISBN, title: title, author: author } }, { new: true })
        .then((result) => {
          return res.status(400).json({ error: `Book information has been updated.`, info1: result });
        })
        .catch((error) => {
          return res.status(400).json({ error: `Book information not updated.`, info1: error });
        });
    } else if (books.length === 0) {
      return res.status(400).json({ error: `No book found.` });
    } else {
      return res.status(400).json({ error: `More than one book with the same ISBN found.` });
    }
  });
};

const addBookController = (req: Request, res: Response) => {
  let { title, author, ISBN, category, shelf, rack, index } = req.body;
  let isBookInfoValid: boolean = category && shelf && rack && index && title && author && ISBN ? true : false;
  // If the book information is incomplete then return an error message.
  if (!isBookInfoValid) {
    return res.status(400).json({ error: "Enter all fields." });
  }

  // Otherwise create a timestamp and add the book to the DB.
  let newBookData: IBook = {
    title: req.body.title,
    author: req.body.author,
    ISBN: req.body.ISBN,
    isBorrowed: false,
    issuedTo: "",
    category: category,
    shelf: shelf,
    rack: rack,
    index: index,
    firstAddedDate: new Date(),
  };
  findBooks(req.body.ISBN)
    .then((books) => {
      if (books.length > 0) {
        return res.status(400).json({ response: "Book with same ISBN already exists.", books: books });
      } else if (books.length === 0) {
        addBook(newBookData)
          .then((data) => {
            return res.status(200).json({ response: "New book added." });
          })
          .catch((error) => {
            return res.status(400).json({ error: `Error while adding a new book. ${error}` });
          });
      }
    })
    .catch((error) => {
      return res.status(400).json({ error: `Error while checking for previous book entries.` });
    });
};

const deleteBookController = (req: Request, res: Response) => {
  let { ISBN } = req.body;
  if (!ISBN) {
    return res.status(404).json({ error: "Enter the ISBN to be deleted." });
  } else {
    BooksModel.deleteOne({ ISBN: ISBN })
      .then((result) => {
        if (result.deletedCount > 0 && result.acknowledged) {
          return res.status(200).json({ response: `Book with ISBN ${ISBN} has been deleted`, info1: result }); // <-- Book deleted
        } else if (!result.acknowledged) {
          return res.status(404).json({ response: `Book with ${ISBN} was not found`, info1: result });
        } else if (result.deletedCount === 0) {
          return res.status(200).json({ response: `Book with ${ISBN} was not found`, info1: result });
        }
      })
      .catch((error) => {
        return res.status(404).json({ error: "Book ISBN was not deleted.", info1: error });
      });
  }
};

const issueBookController = (req: Request, res: Response) => {
  let { ISBN, newUserID } = req.body;
  if (!ISBN) {
    return res.status(404).json({ error: "Enter an ISBN number." });
  }
  if (!newUserID) {
    return res.status(404).json({ error: "Enter the user ID of a borrower." });
  }
  findBooks(ISBN).then((books) => {
    if (books.length === 0) {
      return res.status(404).json({ error: "Book not found." });
    } else if (books.length > 1) {
      return res.status(404).json({ error: "More than one book with the same ISBN found." });
    } else {
      let bookID = books[0].ISBN;
      if (books[0].isBorrowed) {
        return res.status(400).json({ error: "Book is already issued." });
      } else {
        BooksModel.findOneAndUpdate({ ISBN: bookID }, { $set: { isBorrowed: true, issuedTo: newUserID } }, { new: true })
          .then((result) => {
            return res.status(200).json({ response: "Book has been issued.", info1: result });
          })
          .catch((error) => {
            return res.status(404).json({ error: "Book could not be issued.", info1: error });
          });
      }
    }
  });
};

const returnBookController = (req: Request, res: Response) => {
  let { ISBN } = req.body;
  if (!ISBN) {
    return res.status(404).json({ error: "Enter an ISBN number." });
  }
  findBooks(ISBN).then((books) => {
    if (books.length === 0) {
      return res.status(404).json({ error: "Book not found." });
    } else if (books.length > 1) {
      return res.status(404).json({ error: "More than one book with the same ISBN found." });
    } else {
      let bookID = books[0].ISBN;
      if (books[0].isBorrowed) {
        BooksModel.findOneAndUpdate({ ISBN: bookID }, { $set: { isBorrowed: false, issuedTo: "" } }, { new: true })
          .then((result) => {
            return res.status(200).json({ response: "Book has been returned to inventory.", info1: result });
          })
          .catch((error) => {
            return res.status(404).json({ error: "Book could not be returned to inventory.", info1: error });
          });
      } else {
        return res.status(200).json({ error: "Book is already in the inventory and not issued to anyone." });
      }
    }
  });
};

export { updateBookController, addBookController, deleteBookController, issueBookController, returnBookController };
