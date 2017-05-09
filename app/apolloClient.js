import { ApolloClient, ApolloProvider } from 'react-apollo';


const apolloClient = new ApolloClient({
    reduxRootSelector: state => state.get('apollo'),
});

export default apolloClient;