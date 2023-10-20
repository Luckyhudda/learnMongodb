const mongoose = require("mongoose");
const slugify = require("slugify");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  age: Number,
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
  },
});
const userModel = mongoose.model("user", userSchema);

// userSchema.pre("save", function (next) {
//   console.log(this);
//   this.slug = slugify(this.name);
//   console.log(this.slug);
//   next();
// });

module.exports = userModel;
