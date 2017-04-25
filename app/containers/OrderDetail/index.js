import React from 'react';
import { connect } from 'react-redux';

import { editOrder, loadOrder } from './actions';


class OrderDetail extends React.PureComponent{
    render(){
    }
}

OrderDetail.propTypes = {
    order: React.PropTypes.object,
};


export function mapDispatchToProps(dispatch) {
    return {
        editOrder: () => dispatch(editOrder()),
        loadOrder: () => dispatch(loadOrder()),
    }
}

export default OrderDetail;