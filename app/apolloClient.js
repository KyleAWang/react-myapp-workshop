import { ApolloClient } from 'react-apollo';


const apolloClient = new ApolloClient({
  reduxRootSelector: (state) => state.get('apollo'),
    // dataIdFromObject: (result) => {
    //     if (result.id && result.__typename) {
    //         return result.__typename + result.id;
    //     }
    //     return null;
    // },
});

export default apolloClient;
