const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    avatarUrl: String
    orders: [ID]
    catalog: [ID]
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
      price: Int
      sellerId: ID
      category: ID
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [ID]
    sellerId: ID
    buyerId: ID
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
    products(category: ID, title: String, id: ID) : [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!, buyerId: ID, sellerId: ID,): Order
    updateUser(username: String, email: String, password: String, avatarUrl: String): User
    addProduct(title: String, description: String, image: String, price: Int, category: ID, sellerId: ID): Product
    updateProduct(_id: ID!, title: String, description: String, image: String, price: Int, category: [ID]): Product
    login(email: String!, password: String!): Auth
  }
  `;

  module.exports = typeDefs;