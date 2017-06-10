import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';

import Address from 'components/Address';
import OrderItems from 'components/OrderItems';
import Shipping from 'components/Shipping';
import OrderDetail from 'containers/OrdersPage/OrderDetail';

export default function KTable(props) {
  const { items, loadOrder } = props;
  let itemContent = <div></div>;
  if (items) {
    itemContent = items.map((order, index) => (
      <tr key={`order-${index}`}>
        <td>{index}</td>
        <td>{order.orderId}</td>
        <td><OrderItems items={order.items} /></td>
        <td><FormattedNumber
          value={order.subtotal}
          style="currency"
          currency="USD"
        /></td>
        <td>{order.status}</td>
        <td>
          <FormattedTime
            value={order.created}
          />&nbsp;
          <FormattedDate
            value={order.created}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </td>
        <td><Address address={order.address} /></td>
        <td><Shipping shipping={order.shipping} /></td>
        <td><div><Button bsSize="xs" bsStyle="link" onClick={() => loadOrder(order)}>Edit</Button></div>
          <div><Button bsSize="xs" bsStyle="link">Delete</Button></div></td>
      </tr>
      ));
  }


  return (
    <div>
      <Table responsive striped hover condensed>
        <thead>
          <tr>
            <th>#</th>
            <th>No.</th>
            <th>Items</th>
            <th>Subtotal</th>
            <th>Status</th>
            <th>Created</th>
            <th>Address</th>
            <th>Shipping</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemContent}
        </tbody>
      </Table>
      <OrderDetail />
    </div>
  );
}

KTable.propTypes = {
  items: React.PropTypes.array,
  loadOrder: React.PropTypes.func,
};

// const mapStateToProps = createStructuredSelector({
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     loadOrder: (order) => dispatch(loadOrder(order)),
//   };
// }

// export default KTable;
// export default connect(mapStateToProps, mapDispatchToProps)(KTable);

