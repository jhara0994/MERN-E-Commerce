const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    avatarUrl: String
    orders: [Order]!
    catalog: [Product]!
  }

  type Category {
      _id: ID
      name: String
  }

  type Product {
      _id: ID
      title: String
      description: String
      image: String
      price: Number
      category: {Category}
  }
  `;

  module.exports = typeDefs;