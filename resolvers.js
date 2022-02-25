const Listing = require('./models/listings');
const Booking = require('./models/bookings');
const User = require('./models/users');

exports.resolvers = {
  Query: {
    getListing: async (parent, args) => {
      return await Listing.find({});
    },
    getListingByCity: async (parent, args) => {
      return await Listing.find({ city: args.city });
    },
    getListingByTitle: async (parent, args) => {
        return await Listing.find({listing_title: args.listing_title});
    },
    getBookings: async (parent, args) => {
      return await Booking.find({});
    }
  },
  Mutation: {
    addListing: async (parent, args) => {
      console.log(args);
      const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      const isValidEmail = emailExpression.test(
        String(args.email).toLowerCase()
      );

      if (!isValidEmail) {
        throw new Error('Email is not valid');
      }

      let newListing = new Listing({
        listing_id: args.listing_id,
        listing_title: args.listing_title,
        description: args.description,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email,
        username: args.username
      });
      return await newListing.save();
    },
    bookListing: async (parent, args) => {
      let bookListing = new Booking({
        listing_id: args.listing_id,
        booking_id: args.booking_id,
        booking_date: args.booking_date,
        booking_start: args.booking_start,
        booking_end: args.booking_end,
        username: args.username
      });
      return await bookListing.save();
    },
    addUser: async (parent, args) => {
      const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      const isValidEmail = emailExpression.test(
        String(args.email).toLowerCase()
      );

      if (!isValidEmail) {
        throw new Error('Email is not valid');
      }

      let newUser = new User({
        username: args.username,
        firstname: args.firstname,
        lastname: args.lastname,
        password: args.password,
        email: args.email,
        type: args.type
      });
      return await newUser.save();
    }
  }
};
