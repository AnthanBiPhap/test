import { Schema, model } from "mongoose";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      // required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [200, "Title must be less than 200 characters long"],
    },
    keyword: {
      type: String,
      trim: true,
      // required: [true, "Keyword is required"],
    },
    description: {
      type: String,
      trim: true,
      // required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description must be less than 500 characters long"],
    },
    content: {
      type: String,
      // required: [true, "Content is required"],
      minlength: [50, "Content must be at least 50 characters long"],
    },
    date: {
      type: Date,
      // required: [true, "Date is required"],
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "articles",
  }
);

export default model("Article", articleSchema);
