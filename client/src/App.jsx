import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

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
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <AddClientModal />
          <Projects />
          <Clients /> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
