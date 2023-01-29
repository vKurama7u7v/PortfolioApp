import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
          createdAt
          publishedAt
          updatedAt
        }
      }
    }
  }
`;
