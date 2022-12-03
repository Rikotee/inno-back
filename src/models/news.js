import mongoose from "mongoose";

export const New= mongoose.model("New", {
  subject: String,
  news: String,
  date: String,
});