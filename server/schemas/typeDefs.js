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
      category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String) : [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    updateProduct(_id: ID!, price: Int!): Product
    login(email: String!, password: String!): Auth
  }
  `;

  module.exports = typeDefs;