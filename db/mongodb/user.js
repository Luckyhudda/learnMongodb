const mongoose = require("mongoose");
const slugify = require("slugify");
const { Schema } = mongoose;
const validator = require('validator')

const userSchema = new Schema({
  name: {
    type: String,
    required: true, // validation
    minlength: [4, "Name should have at least 4 characters"], // validation
  },
  slug: String,
  password: {
    type: String,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message: "If you want to use a password, it must be a strong password",
    },
  },
  age: {
    type: Number,
    min: [18, `You must be at least 18 years old`],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"], // validation
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Invalid Email Address",
    },
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
