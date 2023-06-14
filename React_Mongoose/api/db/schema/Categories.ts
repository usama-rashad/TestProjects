import mongoose from "mongoose";
const { Schema } = mongoose;

export interface ICategory {
  categoryName: string;
}

const CategorySchema = new Schema({
  categoryName: String,
});

export const CategoryModel = mongoose.model("category", CategorySchema);
