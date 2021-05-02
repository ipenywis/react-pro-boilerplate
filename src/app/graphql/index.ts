import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});
