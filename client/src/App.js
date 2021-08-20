import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Dashboard from './pages/Dashboard';
import SingleTherapist from './pages/SingleTherapist';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
            <Route exact path='/therapist' component={SingleTherapist} />
            {/* <Route render={() => <h1 className='display-2'>The page requested does not exist!</h1>} /> */}

          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
