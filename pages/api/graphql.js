import { ApolloServer, gql } from "apollo-server-micro";
import { getAllItems, getItemBy } from "../../lib/db";

const typeDefs = gql`
  type Item {
    id: String!
    title: String!
    url: String!
    points: Int
    timestamp: String
    author: String
    # author: User
  }

  # type User {
  #   user: String!
  #   created: String
  #   karma: Int
  #   about: String
  #   submissions: [Item]
  #   comments: [Comment]
  #   favorites: [Item]
  # }

  # type Comment {
  #   item: Item
  #   text: String
  #   timestamp: String
  # }

  type Query {
    items: [Item]!
    item(id: String!): Item
    # user(id: ID!): User
  }

  # type Mutation {
  #   createItem(url: String!, title: String): Item
  #   postComment(id: ID!, text: String): Comment
  # }
`;

const resolvers = {
  Query: {
    items: (root, args, context) => getAllItems(),
    item: (root, args, context) => getItemBy(args.id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers, playground: true });
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
