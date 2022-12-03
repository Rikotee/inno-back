import mongoose from "mongoose";

export const Feedback= mongoose.model("Feedback", {
  subject: String,
  feedback: String,
  email: String,
  date: String,
});