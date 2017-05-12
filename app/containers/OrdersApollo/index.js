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
        const { orders, fetchMore }= this.props;

        let content = <div>Loading...</div>
        if (orders){
            // content = orders.map((order, index) => (
            //     <div key={index}>{order.subtotal}</div>
            // ));
            content = (<KTable items={orders} onLoadMore={fetchMore}/>);
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
    fetchMore: React.PropTypes.func,
};

const ITEMS_PER_PAGE = 10;

const OrdersApolloWithData = graphql(ORDERS_QUERY, {
    options: () => {
        return {
            variables: {
                offset: 0,
                limit: ITEMS_PER_PAGE,
            }
        }
    },
    props: ({data: {loading, orders, fetchMore}}) => ({
        loading,
        orders,
        fetchMore: () => fetchMore({
            variables: {
                offset: orders.length,
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                console.log('updateQuery');
                if(!fetchMoreResult.orders) {
                    return prev;
                }
                return Object.assign({}, prev, {
                    orders: [...prev.orders, ...fetchMoreResult.orders],
                });
            }
        })
    }),
})(OrdersApollo);

export default connect()(OrdersApolloWithData);

