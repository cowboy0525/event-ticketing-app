import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "@env";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;
