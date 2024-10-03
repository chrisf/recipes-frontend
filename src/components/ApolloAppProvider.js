"use client";
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client");

// todo: determine at build time based on env?
const APOLLO_SERVER_URL = "http://localhost:4000";

const client = new ApolloClient({
  uri: APOLLO_SERVER_URL,
  cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
