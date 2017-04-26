import React from 'react';
import { Table, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';

import Address from 'components/Address';
import OrderItems from 'components/OrderItems';
import Shipping from 'components/Shipping';
import { editOrder } from 'containers/OrderDetail/actions';

class KTable extends React.Component{


    constructor(props){
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close(){
        this.setState({showModal: false});
        console.log('close;', this.state.showModal);
    }

    open(){
        this.setState({showModal: true});
        console.log(this.state.showModal);
    }

    render(){
        const { items } = this.props;

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

        const itemContent = items.map((item, index) => (
            <tr key={`item-${index}`}>
                <td>{index}</td>
                <td>{item.orderId}</td>
                <td><OrderItems items={item.items} /></td>
                <td><FormattedNumber
                    value={item.subtotal}
                    style='currency'
                    currency="USD"
                /></td>
                <td>{item.status}</td>
                <td>
                    <FormattedTime
                        value={item.created}/>&nbsp;
                    <FormattedDate
                        value={item.created}
                        year='numeric'
                        month='long'
                        day='2-digit'/>
                </td>
                <td><Address address={item.address}/></td>
                <td><Shipping shipping={item.shipping}/></td>
                <td><div><Button bsSize="xs" bsStyle="link" onClick={this.open}>Edit</Button></div>
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
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>
                        <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                        <h4>Tooltips in a modal</h4>
                        <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
}

KTable.propTypes = {
    items: React.PropTypes.array,
    onEditOrder: React.PropTypes.func,
};


export default KTable;

