import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { loadOrders } from './actions';
import { makeSelectOreders } from './selectors';
import KTable from './ktable';


export class OrdersPage extends React.Component {

  componentDidMount() {
    this.props.loadOrders();
  }

  render() {
    const { orders } = this.props;
    let content = (<div></div>);

    if (orders) {
      content = (<KTable items={orders} />);
    } else {
      content = (<div>Loading...</div>);
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

OrdersPage.propTypes = {
  orders: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]),
  // loading: React.PropTypes.bool,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.bool,
  //   React.PropTypes.object,
  // ]),
  loadOrders: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  orders: makeSelectOreders(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});


export function mapDispatchToProps(dispatch) {
  return {
    loadOrders: () => dispatch(loadOrders()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
