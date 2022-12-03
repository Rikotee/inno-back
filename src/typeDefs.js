import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Event {
    _id: ID!
    subject: String!
    event: String!
    date: String!
  }

  type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!

    getEvents: [Event!]!,
    getEvent(id: ID!): Event!
  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
    createEvent(subject: String!, event: String!, date: String!): Event!
  }
`;