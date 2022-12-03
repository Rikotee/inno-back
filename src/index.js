import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import {Event as EventModel } from './models/events';
import Events from './dataSources/events';
import {Feedback as FeedbackModel } from './models/feedbacks';
import Feedback from './dataSources/feedback';
import {User as UserkModel } from './models/users';
import User from './dataSources/users';

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  events: new Events(EventModel),
  feedbacks: new Feedback(FeedbackModel),
  users: new User(UserkModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});