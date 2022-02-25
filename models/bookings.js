const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  listing_id: {
    type: Number,
    required: [true, 'Please enter Listing ID'],
    unique: [true, 'Listing ID already exists'],
    trim: true
  },
  booking_id: {
    type: Number,
    required: [true, 'Please enter Booking ID'],
    unique: [true, 'Booking ID already exists'],
    trim: true
  },
  booking_date: {
    type: String,
    default: Date.now(),
    required: [true, 'Please enter date of Booking']
  },
  booking_start: {
    type: String,
    required: [true, 'Please enter start date']
  },
  booking_end: {
    type: String,
    required: [true, 'Please enter end date']
  },
  username: {
    type: String,
    required: [true, 'Please enter user ID'],
    trim: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
