import { gql } from '@apollo/client';

export const MUTATION_ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const MUTATION_LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const MUTATION_ADD_PRODUCT = gql`
mutation AddProduct($title: String, $description: String, $image: String, $price: Int, $category: ID, $sellerId: ID) {
  addProduct(title: $title, description: $description, image: $image, price: $price, category: $category, sellerId: $sellerId) {
    _id
    title
    description
    image
    price
    sellerId {
      _id
      username
      email
      password
      avatarUrl
      orders
      catalog
    }
    category {
      _id
      name
    }
  }
}
`;

export const MUTATION_ADD_ORDER = gql`
mutation AddOrder($products: [ID]!, $buyerId: ID, $sellerId: ID) {
  addOrder(products: $products, buyerId: $buyerId, sellerId: $sellerId) {
    sellerId
    buyerId
    purchaseDate
    products
    _id
  }
}
`