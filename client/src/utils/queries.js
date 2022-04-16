import { gql } from '@apollo/client';

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       title
//       description
//       image
//       price
//       category {
//         _id
//       }
//     }
//   }
// `;

export const QUERY_MULTIPLE_PRODUCTS = gql`
query MultipleProducts($ids: [ID]) {
  multipleProducts(ids: $ids) {
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

export const QUERY_PRODUCTS = gql`
query Query($category: ID, $title: String, $productsId: ID) {
  products(category: $category, title: $title, id: $productsId) {
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
}`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!, $buyerId: ID) {
    checkout(products: $products, buyerId: $buyerId) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
query Query {
    products {
      _id
      title
      description
      image
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
query Query {
  categories {
    _id
    name
  }
}
  `

  export const QUERY_USER = gql`
  query QueryUser($id: ID) {
    user(_id: $id) {
      username
      email
      password
      avatarUrl
      orders
      catalog
    }
  }
`;

export const QUERY_ORDERS = gql`
query GetOrders($userId: ID!) {
  order(userId: $userId) {
    _id
    purchaseDate
    products
    sellerId
    buyerId
  }
}
`;

export const QUERY_GET_CUSTOMER = gql`
query getCustomer($sessionId: String) {
  customer(sessionId: $sessionId)
}
`;