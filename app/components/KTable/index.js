import React from 'react';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';

import Address from 'components/Address';
import OrderItems from 'components/OrderItems';
import Shipping from 'components/Shipping';
import OrderDetail from 'containers/OrderDetail';
import { loadOrder } from 'containers/OrderDetail/actions';
import FieldGroup from 'components/FieldGroup';
import ShippingTableItem from 'components/ShippingTableItem';
import OrderTableItem from 'components/OrderTableItem';
import AddressTableItem from 'components/AddressTableItem';

class KTable extends React.Component{
    constructor(props){
        super(props);
        // this.state = {showModal: false, selItem:''};
        // this.close = this.close.bind(this);
        // this.open = this.open.bind(this);
    }
    close(){
        // this.setState({showModal: false, selItem:''});
        // console.log('close;', this.state.showModal);
    }

    open(item){
        // this.setState({showModal: true, selItem:item});
        // console.log(item);
    }

    render(){
        const { items, item } = this.props;

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
                <td><div><Button bsSize="xs" bsStyle="link" onClick={() => this.props.loadOrder({order})}>Edit</Button></div>
                    <div><Button bsSize="xs" bsStyle="link">Delete</Button></div></td>
            </tr>
        ));

        return(
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
                <OrderDetail/>
            </div>
        );
    };
}

KTable.propTypes = {
    items: React.PropTypes.array,
    loadOrder: React.PropTypes.func,
    item: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
    ]),
    showModal: React.PropTypes.bool,
    openModal: React.PropTypes.func,
    closeModal: React.PropTypes.func,
};

export default KTable;

