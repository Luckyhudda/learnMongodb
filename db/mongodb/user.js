const mongoose = require("mongoose");
const slugify = require("slugify");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true, // validation
    minlength: [4, "Name sould have atleast 4 charectore ...."], // validation
  },
  slug: String,
  age: {
    type:Number,
    min:[18,`You are not eligible for it, age sould be gender then 18`]
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
