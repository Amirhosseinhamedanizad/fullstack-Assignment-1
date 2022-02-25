const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Listing {
    listing_id: Int!
    listing_title: String!
    description: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!
    username: String!
  }

  type Booking {
    listing_id: Int!
    booking_id: Int!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    username: String!
  }

  type User {
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    type: String!
  }

  type Query {
    getListing: [Listing]
    getListingByTitle(listing_title: String!): [Listing]
    getListingByCity(city: String!): [Listing]
    getBookings: [Booking]
  }

  type Mutation {
    addListing(
      listing_id: Int!
      listing_title: String!
      description: String!
      street: String!
      city: String!
      postal_code: String!
      price: Float!
      email: String!
      username: String!
    ): Listing

    bookListing(
      listing_id: Int!
      booking_id: Int!
      booking_date: String!
      booking_start: String!
      booking_end: String!
      username: String!
    ): Booking

    addUser(
      username: String!
      firstname: String!
      lastname: String!
      password: String!
      email: String!
      type: String!
    ): User
  }
`;
