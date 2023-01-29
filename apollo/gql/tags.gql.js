import { gql } from "@apollo/client";

export const GET_TAGS = gql`
  query GetTags {
    tags {
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
