import "./App.css";
import Header from "./components/Header";
import Clients from "./components/Clients";
import AddClientModal from "./components/AddClientModel";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         clients: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//         projects: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//       },
//     },
//   },
// });

// Apollo Client Setup
const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
