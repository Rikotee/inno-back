import mongoose from "mongoose";

export const Event= mongoose.model("Event", {
  subject: String,
  event: String,
  date: String,
  eventdate: String,
});