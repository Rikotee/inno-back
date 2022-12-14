import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Event {
    _id: ID!
    subject: String!
    event: String!
    date: String!
    eventdate: String!
  }

  type New {
    _id: ID!
    subject: String!
    news: String!
    date: String!
  }

  type Feedback {
    _id: ID!
    subject: String!
    feedback: String!
    email: String
    date: String!
  }

  type User {
    _id: ID!
    username: String!
    admin: Boolean!
    token: String
  }

  type Query {
    getEvents: [Event!]!,
    getEvent(id: ID!): Event!

    getNews: [New!]!,
    getNew(id: ID!): New!

    getFeedbacks: [Feedback!]!,
    getFeedback(id: ID!): Feedback!

    getUsers: [User!]!,
    getUser(id: ID!): User!
  }

  type Mutation {
    createEvent(subject: String!, event: String!, date: String!, eventdate: String!): Event!
    createNew(subject: String!, news: String!, date: String!): New!
    createFeedback(subject: String!, feedback: String!, email: String, date: String!): Feedback!
    createUser(username: String!, password: String!, admin: Boolean! = false): User!

    deleteEvent(id: ID!, subject: String, event: String, date: String, eventdate: String): Event!
    deleteNews(id: ID!, subject: String, news: String, date: String): New!
    deleteFeedback(id: ID!, subject: String, feedback: String, email: String, date: String): Feedback!
  }
`;