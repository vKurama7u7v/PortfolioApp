import { gql } from "@apollo/client";

export const GET_TAGS = gql`
  query GetTags {
    tags(sort: "name:asc", pagination: { limit: 100 }) {
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
