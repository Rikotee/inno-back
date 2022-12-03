export const resolvers = {
    Query: {
      getMovies: async (_, _args, { dataSources: { movies } }) => {
        return movies.getMovies();
      },
      getMovie: async (_, { id }, { dataSources: { movies } }) => {
        return movies.getMovie(id);
      },

      getEvents: async (_, _args, { dataSources: { events } }) => {
        return events.getEvents();
      },
      getEvent: async (_, { id }, { dataSources: { events } }) => {
        return events.getEvent(id);
      }
    },
    Mutation: {
      createMovie: async (_, args, { dataSources: { movies } }) => {
        return movies.createMovie(args)
      },

      createEvent: async (_, args, { dataSources: { events } }) => {
        return events.createEvent(args)
      }
    }
  }