const mongoose = require("mongoose");
const validator = require("validator");
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
