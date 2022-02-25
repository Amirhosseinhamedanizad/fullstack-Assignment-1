const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  listing_id: {
    type: Number,
    required: [true, 'Please enter user ID'],
    unique: [true, 'listing ID already exists'],
    trim: true
  },
  listing_title: {
    type: String,
    required: [true, 'Please enter listing title']
  },
  description: {
      type: String,
    required: [true, 'Please enter a description']
  },
  street: {
    type: String,
    required: [true, 'Please enter street']
  },
  city: {
    type: String,
    required: [true, 'Please enter city']
  },
  postal_code: {
    type: String,
    required: [true, 'Please enter postal code'],
    uppercase: true,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please enter price'],
    default: 0.0,
    validate(value) {
      if (value < 0.0) {
        throw new Error('Negative number is not allowed');
      }
    }
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
  username: {
    type: String,
    required: [true, 'Please enter user ID'],
    trim: true
  }
});

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;
