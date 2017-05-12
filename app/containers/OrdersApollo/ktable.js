import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Address from 'components/Address';
import OrderItems from 'components/OrderItems';
import Shipping from 'components/Shipping';
import OrderDetail from './OrderDetail';
import { loadOrder } from 'containers/OrdersPage/actions';
import { makeSelectOrder, makeSelectShowModal } from 'containers/OrdersPage/selectors';
import './styles/index.scss';

class KTable extends React.Component{
    render(){
        const { items, onLoadMore } = this.props;


        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        const itemContent = items.map((order, index) => (
            <tr key={`order-${index}`}>
                <td>{index}</td>
                <td>{order.orderId}</td>
                <td><OrderItems items={order.items} /></td>
                <td><FormattedNumber
                    value={order.subtotal}
                    style='currency'
                    currency="USD"
                /></td>
                <td>{order.status}</td>
                <td>
                    <FormattedTime
                        value={order.created}/>&nbsp;
                    <FormattedDate
                        value={order.created}
                        year='numeric'
                        month='long'
                        day='2-digit'/>
                </td>
                <td><Address address={order.address}/></td>
                <td><Shipping shipping={order.shipping}/></td>
                <td><div><Button bsSize="xs" bsStyle="link" onClick={this.props.loadOrder.bind(this, order)}>Edit</Button></div>
                    <div><Button bsSize="xs" bsStyle="link">Delete</Button></div></td>
            </tr>
        ));

        return(
            <div className="main_block">
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
                <OrderDetail/>
                <div className="center_button">
                    <Button className='center_button' bsStyle="info"  onClick={onLoadMore}>Load More...</Button>
                </div>
            </div>
        );
    };
}

KTable.propTypes = {
    items: React.PropTypes.array,
    loadOrder: React.PropTypes.func,
    onLoadMore: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps (dispatch){
    return {
        loadOrder: (order) => dispatch(loadOrder(order)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(KTable);

