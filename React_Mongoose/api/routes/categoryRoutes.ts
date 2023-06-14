import { addCategory } from "./../controllers/categoryController";
import express from "express";

const route = express.Router();

export const addCategoryRoute = route.post("/add", addCategory);
