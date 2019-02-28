import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
    uri: process.env.REACT_APP_API
});
  
const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => {
        const token = localStorage.getItem('access_token');
        return {
            headers: {
                ...headers,
                Accept: 'application/json',
                Authorization: token ? `Bearer ${token}` : null
            }
        };
    });
    return forward(operation).map(result => {
        const { restResponses } = operation.getContext();
        const authTokenResponse = restResponses.find(res => res.url.includes('login') && res.headers.has('Authorization'));
        // TODO: Login response should return JWT on the 'Authorization' header
        if (authTokenResponse) {
            const token = authTokenResponse.headers.get('Authorization');
            localStorage.setItem('access_token', token);
        }

        return result;
    });
});

const errorLink = onError(({ restErrors, networkError }) => {
    if (restErrors) {
        restErrors.map(({ message, locations, path }) =>
            console.error(`[REST API error]: Message: ${message}`),
        );
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

// https://www.apollographql.com/docs/link/links/rest.html#options.responseTransformer
const restClient = new ApolloClient({
    link: ApolloLink.from([ authLink, restLink, errorLink ]),
    cache: new InMemoryCache()
});

export default restClient;
