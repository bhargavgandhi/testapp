import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client-preset';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://antserver-blocjgjbpw.now.sh/graphql' }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
)
registerServiceWorker();
