import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    portfolios(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          title: name
          description
          thumbnail {
            data {
              id
              attributes {
                hash
                name
                url
                provider
              }
            }
          }
          categories: category {
            data {
              id
              attributes {
                category: name
              }
            }
          }
          tags {
            data {
              id
              attributes {
                tag: name
              }
            }
          }
          date
          createdAt
          publishedAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProjectById($id: ID!) {
    portfolio(id: $id) {
      data {
        id
        attributes {
          title: name
          description
          content
          thumbnail {
            data {
              id
              attributes {
                hash
                name
                url
                provider
              }
            }
          }
          categories: category {
            data {
              id
              attributes {
                category: name
              }
            }
          }
          tags {
            data {
              id
              attributes {
                tag: name
              }
            }
          }
          code
          demo
          keywords
          date
          createdAt
          publishedAt
          updatedAt
        }
      }
    }
  }
`;
