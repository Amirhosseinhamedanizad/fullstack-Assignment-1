const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    lowercase: true,
    trim: true,
    unique: [true, 'Duplicate username not allowed']
  },
  firstname: {
    type: String,
    required: [true, 'Please enter firstname'],
    lowercase: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please enter lastname'],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter password']
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    trim: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  type: {
    type: String,
    required: [true, 'Please enter user type'],
    lowercase: true,
    trim: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
