import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_PATH } from "@/utils/const.utils";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri: `${BASE_PATH}/graphql`,
});

export default client;
