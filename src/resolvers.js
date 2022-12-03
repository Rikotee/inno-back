export const resolvers = {
    Query: {

      getEvents: async (_, _args, { dataSources: { events } }) => {
        return events.getEvents();
      },
      getEvent: async (_, { id }, { dataSources: { events } }) => {
        return events.getEvent(id);
      },

      getNews: async (_, _args, { dataSources: { news } }) => {
        return news.getNews();
      },
      getNew: async (_, { id }, { dataSources: { news } }) => {
        return news.getNew(id);
      },

      getFeedbacks: async (_, _args, { dataSources: { feedbacks } }) => {
        return feedbacks.getFeedbacks();
      },
      getFeedback: async (_, { id }, { dataSources: { feedbacks } }) => {
        return feedbacks.getFeedback(id);
      },

      getUsers: async (_, _args, { dataSources: { users } }) => {
        return users.getUsers();
      },
      getUser: async (_, { id }, { dataSources: { users } }) => {
        return users.getUser(id);
      },
    },
    Mutation: {

      createEvent: async (_, args, { dataSources: { events } }) => {
        return events.createEvent(args)
      },
      deleteEvent: async (_, { id }, { dataSources: { events } }) => {
        return events.deleteEvent(id);
      },


      createNew: async (_, args, { dataSources: { news } }) => {
        return news.createNew(args)
      },


      createFeedback: async (_, args, { dataSources: { feedbacks } }) => {
        return feedbacks.createFeedback(args)
      },

      
      createUser: async (_, args, { dataSources: { users } }) => {
        return users.createUser(args)
      },
    }
  }