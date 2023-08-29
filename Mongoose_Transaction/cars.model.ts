import mongoose, { Schema } from "mongoose";

export const Cars = mongoose.model("cars", new Schema({ make: String, model: Number, isLeased: Boolean }));
