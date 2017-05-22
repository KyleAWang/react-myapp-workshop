# react-myapp-workshop

Frontend: React, Redux, Bootstrap, ApolloClient <br/>
Backend: Node, Express, Mongoose, GraphQL, Passport<br/>
Database: MongoDB<br/>
Test: Jest, enzyme<br/>
Package Builder: Webpack, NPM<br/>
<br/><br/>


The project includes Order Management, Login module.

Order management adopts two different approaches to implement similar funtionalities:

1, OrdersApollo component uses Apollo client to deal with data. The fetch policy uses the 'cache-first' strategy.

2, OrdersPage component uses fetch of whatwg-fetch to communicate with node server. Also use sagas to listen events and then invoke proper actions like yielding a call to server.


Login module utilizies passport's local strategy. 


Leverage GraphQL on order related api, e.g. query and mutation.

This project is still ongoing. Later will add acl for api's access control. Also need add more tests.



