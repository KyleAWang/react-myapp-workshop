import React from 'react';
import {graphql, gql} from 'react-apollo';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { loadOrders } from 'containers/OrdersPage/actions';
import { makeSelectOreders } from 'containers/OrdersPage/selectors';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import KTable from './ktable';
import ORDERS_QUERY from 'containers/graphql/Orders.graphql';


export class OrdersApollo extends React.Component {
    render() {
        const orders = this.props.orders;

        let content = <div>Loading...</div>
        if (orders){
            // content = orders.map((order, index) => (
            //     <div key={index}>{order.subtotal}</div>
            // ));
            content = (<KTable items={orders} />);
        }

        return <div>
            {content}
        </div>;
    }
}

OrdersApollo.propTypes = {
    orders: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.array,
    ]),
    loading: React.PropTypes.bool,
};

const OrdersForLayout = gql`
    query {
      orders{
        _id
        totalCost
        totalRmbCost
        orderId
        subtotal
        updated
        created
        status
        items{
          _id
          name
          url
          price
          quantity
          subtotal
        }
        address{
          name
          tel
          zip
          weight
          ID
          address
        }
        shipping{
          _id
          no
          url
          status
        }
      }
    }
`;

const Query = gql`query {orders{_id
        subtotal}}`;

const OrdersApolloWithData = graphql(ORDERS_QUERY, {
    props: ({data: {loading, orders}}) => ({
        loading,
        orders
    }),
})(OrdersApollo);

export default connect()(OrdersApolloWithData);

