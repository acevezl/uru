import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SingleTherapist from "./pages/SingleTherapist";
import Dashboard from "./pages/Dashboard";
import SingleFile from "./pages/SingleFile";
// import "./sass/main.scss";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/therapist/:id" component={SingleTherapist} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/file/:id" component={SingleFile} />
            <Route
              render={() => (
                <h1 className="display-2">
                  The page requested does not exist!
                </h1>
              )}
            />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
