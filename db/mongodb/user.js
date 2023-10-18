const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age:Number,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  }
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
