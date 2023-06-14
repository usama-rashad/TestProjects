import express from "express";
import {
  addBookController,
  deleteBookController,
  issueBookController,
  updateBookController,
  returnBookController,
} from "../controllers/bookController";

// Books controller

const route = express.Router();

export const updateBookRoute = route.post("/update", updateBookController);
export const addBookRoute = route.post("/add", addBookController);
export const deleteBookRoute = route.post("/delete", deleteBookController);
export const issueBookRoute = route.post("/issue", issueBookController);
export const returnBookRoute = route.post("/return", returnBookController);
