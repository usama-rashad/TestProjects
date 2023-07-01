import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema(
  {
    username: String,
    imagePath: String,
  },
  {
    collection: "users",
  }
);

export default model("User", userSchema);
