import { Request, Response } from "express";
import { CategoryModel, ICategory } from "./../db/schema/Categories";

export const addCategory = (req: Request, res: Response) => {
  let { category } = req.body;
  if (!category) {
    return res.status(400).json({ error: "Category name must be entered." });
  }
  CategoryModel.findOne({ categoryName: category }).then((result) => {
    if (!result) {
      // Add the new categroy to the DB
      let cat = new CategoryModel();
      cat.categoryName = category;
      cat
        .save()
        .then((result) => {
          return res.status(200).json({ error: `Category ${category} was saved.`, info1: result });
        })
        .catch((error) => {
          return res.status(400).json({ error: `Category ${category} was not saved.`, info1: error });
        });
    } else {
      return res.status(400).json({ error: `Category ${category} already exists.`, info1: result });
    }
  });
};
