import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import DatePicker from 'react-bootstrap-date-picker';

import { closeOrder, changeSubtotal, updateOrder } from './actions';
import { makeSelectOrder, makeSelectShowModal } from './selectors';
import FieldGroup  from 'components/FieldGroup';
// import ShippingTableItem from 'components/ShippingTableItem';
// import OrderTableItem from 'components/OrderTableItem';
// import AddressTableItem from 'components/AddressTableItem';


class OrderDetail extends React.PureComponent{
    constructor(props){
        super(props);
        this.changeCreatedDate = this.changeCreatedDate.bind(this);
        this.changeSubtotal = this.changeSubtotal.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeTotalCost = this.changeTotalCost.bind(this);
        this.changeTotalRmbCost = this.changeTotalRmbCost.bind(this);
        this.changeShippingNo = this.changeShippingNo.bind(this);
        this.changeShippingUrl = this.changeShippingUrl.bind(this);
        this.changeShippingItems = this.changeShippingItems.bind(this);
        this.changeShippingStatus = this.changeShippingStatus.bind(this);
        this.changeItemName = this.changeItemName.bind(this);
        this.changeItemPrice = this.changeItemPrice.bind(this);
        this.changeItemUrl = this.changeItemUrl.bind(this);
        this.changeItemQuantity = this.changeItemQuantity.bind(this);
        this.changeItemSubtotal = this.changeItemSubtotal.bind(this);
        this.changeAddressAddress = this.changeAddressAddress.bind(this);
        this.changeAddressName = this.changeAddressName.bind(this);
        this.changeAddressZip = this.changeAddressZip.bind(this);
        this.changeAddressTel = this.changeAddressTel.bind(this);
        this.changeAddressWeight = this.changeAddressWeight.bind(this);
        this.changeAddressZip = this.changeAddressZip.bind(this);
    }

    changeCreatedDate(date){
        const _order = {
            ...this.props.order,
            created: date,
        };
        this.props.updateOrder(_order);
    }

    changeSubtotal(evt){
        const _order = {
            ...this.props.order,
            subtotal: evt.target.value,
        };
        this.props.updateOrder(_order);
    }

    changeStatus(evt){
        const _order = {
            ...this.props.order,
            status: evt.target.value,
        };
        this.props.updateOrder(_order);
    }

    changeTotalCost(evt){
        const _order = {
            ...this.props.order,
            totalCost: evt.target.value,
        };
        this.props.updateOrder(_order);
    }

    changeTotalRmbCost(evt){
        const _order = {
            ...this.props.order,
            totalRmbCost: evt.target.value,
        };
        this.props.updateOrder(_order);
    }

    changeShippingNo(index, evt){
        const _newShipping = this.props.order.shipping;
        _newShipping[index].no = evt.target.value;
        const _order = {
            ...this.props.order,
            shipping: _newShipping,
        };
        this.props.updateOrder(_order);
    }

    changeShippingUrl(index, evt){
        const _newShipping = this.props.order.shipping;
        _newShipping[index].url = evt.target.value;
        const _order = {
            ...this.props.order,
            shipping: _newShipping,
        };
        this.props.updateOrder(_order);
    }

    changeShippingItems(index, evt){
        const _newShipping = this.props.order.shipping;
        _newShipping[index].items = evt.target.value;
        const _order = {
            ...this.props.order,
            shipping: _newShipping,
        };
        this.props.updateOrder(_order);
    }

    changeShippingStatus(index, evt){
        const _newShipping = this.props.order.shipping;
        _newShipping[index].status = evt.target.value;
        const _order = {
            ...this.props.order,
            shipping: _newShipping,
        };
        this.props.updateOrder(_order);
    }

    changeItemName(index, evt){
        const _newItems = this.props.order.items;
        _newItems[index].name = evt.target.value;
        const _order = {
            ...this.props.order,
            items: _newItems,
        };
        this.props.updateOrder(_order);
    }

    changeItemPrice(index, evt){
        const _newItems = this.props.order.items;
        _newItems[index].price = evt.target.value;
        const _order = {
            ...this.props.order,
            items: _newItems,
        };
        this.props.updateOrder(_order);
    }

    changeItemUrl(index, evt){
        const _newItems = this.props.order.items;
        _newItems[index].url = evt.target.value;
        const _order = {
            ...this.props.order,
            items: _newItems,
        };
        this.props.updateOrder(_order);
    }

    changeItemQuantity(index, evt){
        const _newItems = this.props.order.items;
        _newItems[index].quantity = evt.target.value;
        const _order = {
            ...this.props.order,
            items: _newItems,
        };
        this.props.updateOrder(_order);
    }

    changeItemSubtotal(index, evt){
        const _newItems = this.props.order.items;
        _newItems[index].subtotal = evt.target.value;
        const _order = {
            ...this.props.order,
            items: _newItems,
        };
        this.props.updateOrder(_order);
    }

    changeAddressAddress(evt){
        const _order = {
            ...this.props.order,
            address: {
                address: evt.target.value,
            },
        };
        this.props.updateOrder(_order);
    }

    changeAddressName(evt){
        const _order = {
            ...this.props.order,
            address: {
                name: evt.target.value,
            },
        };
        this.props.updateOrder(_order);
    }

    changeAddressZip(evt){
        const _order = {
            ...this.props.order,
            address: {
                zip: evt.target.value,
            },
        };
        this.props.updateOrder(_order);
    }

    changeAddressTel(evt){
        const _order = {
            ...this.props.order,
            address: {
                tel: evt.target.value,
            },
        };
        this.props.updateOrder(_order);
    }

    changeAddressWeight(evt){
        const _order = {
            ...this.props.order,
            address: {
                weight: evt.target.value,
            },
        };
        this.props.updateOrder(_order);
    }

    render(){
        const { order, showModal } = this.props;

        let shippingContent = <div></div>;
        if (order.shipping != null){
            shippingContent = order.shipping.map((item, index) => (
                <Row className="clearfix" key={`sitem-${index}`}>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='no'
                                    placeholder='no'
                                    type='text'
                                    value={item.no || ''}
                                    onChange={(evt) => this.changeShippingNo(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='url'
                                    placeholder='url'
                                    type='text'
                                    value={item.url || ''}
                                    onChange={(evt) => this.changeShippingUrl(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Items</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                placeholder="textarea"
                                value={item.items || ''}
                                onChange={(evt) => this.changeShippingItems(index, evt)}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='status'
                                    placeholder='status'
                                    type='text'
                                    value={item.status || ''}
                                    onChange={(evt) => this.changeShippingStatus(index, evt)}
                        />
                    </Col>
                </Row>
            ));
        }

        let orderItemContent = <div></div>;
        if (order.items != null){
            orderItemContent = order.items.map((item, index) => (
                <Row className="clearfix" key={`oitem-${index}`}>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='name'
                                    placeholder='name'
                                    type='text'
                                    value={item.name || ''}
                                    onChange={(evt) => this.changeItemName(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='url'
                                    placeholder='url'
                                    type='text'
                                    value={item.url || ''}
                                    onChange={(evt) => this.changeItemUrl(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='price'
                                    placeholder='price'
                                    type='text'
                                    value={item.price || ''}
                                    onChange={(evt) => this.changeItemPrice(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='quantity'
                                    placeholder='quantity'
                                    type='text'
                                    value={item.quantity || ''}
                                    onChange={(evt) => this.changeItemQuantity(index, evt)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='subtotal'
                                    placeholder='subtotal'
                                    type='text'
                                    value={item.subtotal || ''}
                                    onChange={(evt) => this.changeItemSubtotal(index, evt)}
                        />
                    </Col>
                </Row>
            ));
        }

        let addressItemContent = <div></div>;
        if (order.address){
            addressItemContent = (
                <Row className="clearfix">
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup id="formControlsText"
                                    type="text"
                                    placekholder="Name"
                                    label="Name"
                                    value={order.address.name || ''}
                                    onChange={this.changeAddressName}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup id="formControlsText"
                                    type="text"
                                    placekholder="Tel"
                                    label="Tel"
                                    value={order.address.tel || ''}
                                    onChange={this.changeAddressTel}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup id="formControlsText"
                                    type="text"
                                    placekholder="Zip"
                                    label="Zip"
                                    value={order.address.zip || ''}
                                    onChange={this.changeAddressZip}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup id="formControlsText"
                                    type="text"
                                    placekholder="Weight"
                                    label="Weight"
                                    value={order.address.weight || ''}
                                    onChange={this.changeAddressWeight}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup id="formControlsText"
                                    type="text"
                                    placekholder="Address"
                                    label="Address"
                                    value={order.address.address || ''}
                                    onChange={this.changeAddressAddress}
                        />
                    </Col>
                </Row>
            )
        }


        let content = <div></div>
        if (order){
            content = (
                <Modal show={showModal} onHide={this.props.closeOrder} bsSize="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Order Id: {order.orderId}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PanelGroup defaultActiveKey="1" accordion>
                            <Panel header="General" eventKey="1" expanded={true}>
                                <Row className="clearfix">
                                    <Col lg={4} md={6} xs={12}>
                                        <FieldGroup id="formControlsText"
                                                    type="text"
                                                    placekholder="sub total"
                                                    label="Sub Total"
                                                    value={order.subtotal || ''}
                                                    onChange={this.changeSubtotal}
                                        />
                                    </Col>
                                    <Col lg={4} md={6} xs={12}>
                                        <FormGroup controlId="formControlsText">
                                            <ControlLabel>Created</ControlLabel>
                                            <DatePicker id="example-datepicker" value={order.created}  onChange={this.changeCreatedDate}/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4} md={6} xs={12}>
                                        <FormGroup controlId="formControlsSelect">
                                            <ControlLabel>Status</ControlLabel>
                                            <FormControl componentClass="select" placeholder="Status" value={order.status} onChange={this.changeStatus}>
                                                <option value="">--Choose one--</option>
                                                <option value="Submitted">Submitted</option>
                                                <option value="Delivery">Delivery</option>
                                                <option value="Customers">Customers</option>
                                                <option value="DeliveryL">DeliveryL</option>
                                                <option value="Signed">Signed</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="clearfix">
                                    <Col lg={4} md={6} xs={12}>
                                        <FieldGroup id="formControlsText"
                                                    type="text"
                                                    placekholder="Total Cost"
                                                    label="Total Cost"
                                                    value={order.totalCost || ''}
                                                    onChange={this.changeTotalCost}
                                        />
                                    </Col>
                                    <Col lg={4} md={6} xs={12}>
                                        <FieldGroup id="formControlsText"
                                                    type="text"
                                                    placekholder="Total RMB Cost"
                                                    label="Total RMB Cost"
                                                    value={order.totalRmbCost || ''}
                                                    onChange={this.changeTotalRmbCost}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="Shipping" eventKey="2">
                                {shippingContent}
                                {/*<ShippingTableItem*/}
                                    {/*shipping={order.shipping}*/}
                                    {/*changeShippingNo={this.changeShippingNo}*/}
                                    {/*changeShippingUrl={this.changeShippingUrl}*/}
                                    {/*changeShippingItems={this.changeShippingItems}*/}
                                    {/*changeShippingStatus={this.changeShippingStatus}*/}
                                {/*/>*/}
                            </Panel>
                            <Panel header="Order Item" eventKey="3">
                                {orderItemContent}
                                {/*<OrderTableItem orders={order.items}*/}
                                    {/*changeItemName={this.changeItemName}*/}
                                    {/*changeItemPrice={this.changeItemPrice}*/}
                                    {/*changeItemQuantity={this.changeItemQuantity}*/}
                                    {/*changeItemSubtotal={this.changeItemSubtotal}*/}
                                    {/*changeItemUrl={this.changeItemUrl}*/}
                                {/*/>*/}
                            </Panel>
                            <Panel header="Address" eventKey="4">
                                {addressItemContent}
                                {/*<AddressTableItem address={order.address}*/}
                                    {/*changeAddressAddress={this.changeAddressAddress}*/}
                                    {/*changeAddressName={this.changeAddressName}*/}
                                    {/*changeAddressTel={this.changeAddressTel}*/}
                                    {/*changeAddressWeight={this.changeAddressWeight}*/}
                                    {/*changeAddressZip={this.changeAddressZip}*/}
                                {/*/>*/}
                            </Panel>
                        </PanelGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.updateOrder}>Update</Button>
                        <Button onClick={this.props.closeOrder}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );

        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

OrderDetail.propTypes = {
    order: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
    ]),
    showModal: React.PropTypes.bool,
    changeSubtotal: React.PropTypes.func,
    changeCreatedDate: React.PropTypes.func,
    changeStatus: React.PropTypes.func,
    changeTotalCost: React.PropTypes.func,
    changeTotalRmbCost: React.PropTypes.func,
    changeShippingNo: React.PropTypes.func,
    changeShippingItems: React.PropTypes.func,
    changeShippingStatus: React.PropTypes.func,
    changeShippingUrl: React.PropTypes.func,
    changeItemName: React.PropTypes.func,
    changeItemUrl: React.PropTypes.func,
    changeItemPrice: React.PropTypes.func,
    changeItemQuantity: React.PropTypes.func,
    changeItemSubtotal: React.PropTypes.func,
    changeAddressName: React.PropTypes.func,
    changeAddressTel: React.PropTypes.func,
    changeAddressZip: React.PropTypes.func,
    changeAddressWeight: React.PropTypes.func,
    changeAddressAddress: React.PropTypes.func,
};


export function mapDispatchToProps(dispatch, ownProps) {
    return {
        closeOrder: () => dispatch(closeOrder()),
        changeSubtotal: (evt) => dispatch(changeSubtotal(evt.target.value)),
        updateOrder: (order) => dispatch(updateOrder(order)),
    }
}

const mapStateToProps = createStructuredSelector({
    order: makeSelectOrder(),
    showModal: makeSelectShowModal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);