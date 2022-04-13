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

export const QUERY_PRODUCTS = gql`
query Products {
  products {
    _id
    title
    description
    image
    price
    sellerId
  }
}`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
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
  query Query {
    user {
      username
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          description
          image
          price
        }
      }
      sellerId
      buyerId
    }
  }
`;