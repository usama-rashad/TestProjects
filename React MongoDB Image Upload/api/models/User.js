import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema(
  {
    _id: _Schema.Types.ObjectId,
    profileImg: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

export default model("User", userSchema);
