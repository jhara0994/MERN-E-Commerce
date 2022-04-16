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
      sellerId: User
      category: Category
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
    multipleProducts(ids: [ID]): [Product]
    user(_id: ID): User
    order(userId: ID!): [Order]
    checkout(products: [ID]!, buyerId: ID): Checkout
    customer(sessionId: String): String
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