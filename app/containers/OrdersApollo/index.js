import React from 'react';
import {graphql, gql} from 'react-apollo';
import { connect } from 'react-redux';


export class OrdersApollo extends React.Component {
    render() {
        const { orders } = this.props;

        let content = <div>Empty!</div>
        if (orders){
            content = orders.map((order, index) => (
                <div key={index}>
                    {order._id}
                </div>
            ));
        }

        return <div>
            orders:
            {content}
        </div>;
    }
}

OrdersApollo.propTypes = {
    data: React.PropTypes.shape({
        loading: React.PropTypes.bool,
        orders: React.PropTypes.array,
    }),
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

const Query = gql`query {orders{_id}}`;

const OrdersApolloWithData = graphql(Query, {
    props: ({data: {loading, orders}}) => ({
        loading,
        orders
    }),
    skip: false,
})(OrdersApollo);

export default connect()(OrdersApolloWithData);

