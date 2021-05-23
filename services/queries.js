import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query {
    items {
      id
      url
      title
      author
      points
      timestamp
    }
  }
`;

export const GET_UNIQUE_ITEM = gql`
  query GetUniqueItem($itemId: String!) {
    item(id: $itemId) {
      id
      url
      title
      author
      points
      timestamp
    }
  }
`;
