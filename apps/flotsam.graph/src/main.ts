import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Boat {
    name: String
    boatType: String
  }

  type User {
    name: String,
    boats: [Boat]
  }

   type Query {
    boats: [Boat]
    boat(name: String): Boat
    currentUser: User
   }

   type Mutation {
    addBoat(name: String, boatType: String): Boat
   }
`;

const users = {
  'current': { name: "Nisse",}
 }

 const userBoats = {
  'Emil': [0, 1]
 }

const boats = [
  {
    name: 'The Awakening',
    boatType: 'Roddbåt',
  },
  {
    name: 'City of Glass',
    boatType: 'Motorbåt',
  },
];

const resolvers = {
  Mutation: {
    addBoat: (parent, args, context) => {
      // add to database

      return { name: args.name, boatType: args.boatType };
     },

  },
  User: {
    boats: (parent, args, context) => {
      //return boats;
      console.log(parent);
      if(!userBoats[parent.name]) {
        return [];
      }
      return userBoats[parent.name].map(index => boats[index]);
    }
  },
  Query: {
    boats: () => boats,
    boat:  (parent, args)  => boats.find((boat) => boat.name === args.name),
    currentUser: () => ({ name: 'Emil', boats }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const main = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main();

