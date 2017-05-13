import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Modal, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import FieldGroup from 'components/FieldGroup';
import { convertStringToNumber } from 'utils/convertHelper';
import { closeOrder, updateOrder, submitUpdateForm } from './actions';
import { makeSelectOrder, makeSelectShowModal } from './selectors';


class OrderDetail extends React.PureComponent {
  constructor(props) {
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

  changeCreatedDate(date) {
    const ord = {
      ...this.props.order,
      created: date,
    };
    this.props.onUpdateOrder(ord);
  }

  changeSubtotal(evt) {
    const ord = {
      ...this.props.order,
      subtotal: convertStringToNumber(evt.target.value),
    };
    this.props.onUpdateOrder(ord);
  }

  changeStatus(evt) {
    const ord = {
      ...this.props.order,
      status: evt.target.value,
    };
    this.props.onUpdateOrder(ord);
  }

  changeTotalCost(evt) {
    const ord = {
      ...this.props.order,
      totalCost: convertStringToNumber(evt.target.value),
    };
    this.props.onUpdateOrder(ord);
  }

  changeTotalRmbCost(evt) {
    const ord = {
      ...this.props.order,
      totalRmbCost: convertStringToNumber(evt.target.value),
    };
    this.props.onUpdateOrder(ord);
  }

  changeShippingNo(index, evt) {
    const newShip = this.props.order.shipping;
    newShip[index].no = evt.target.value;
    const ord = {
      ...this.props.order,
      shipping: newShip,
    };
    this.props.onUpdateOrder(ord);
  }

  changeShippingUrl(index, evt) {
    const newShip = this.props.order.shipping;
    newShip[index].url = evt.target.value;
    const ord = {
      ...this.props.order,
      shipping: newShip,
    };
    this.props.onUpdateOrder(ord);
  }

  changeShippingItems(index, evt) {
    const newShip = this.props.order.shipping;
    newShip[index].items = evt.target.value;
    const ord = {
      ...this.props.order,
      shipping: newShip,
    };
    this.props.onUpdateOrder(ord);
  }

  changeShippingStatus(index, evt) {
    const newShip = this.props.order.shipping;
    newShip[index].status = evt.target.value;
    const ord = {
      ...this.props.order,
      shipping: newShip,
    };
    this.props.onUpdateOrder(ord);
  }

  changeItemName(index, evt) {
    const newItems = this.props.order.items;
    newItems[index].name = evt.target.value;
    const ord = {
      ...this.props.order,
      items: newItems,
    };
    this.props.onUpdateOrder(ord);
  }

  changeItemPrice(index, evt) {
    const newItems = this.props.order.items;
    newItems[index].price = evt.target.value;
    const ord = {
      ...this.props.order,
      items: newItems,
    };
    this.props.onUpdateOrder(ord);
  }

  changeItemUrl(index, evt) {
    const newItems = this.props.order.items;
    newItems[index].url = evt.target.value;
    const ord = {
      ...this.props.order,
      items: newItems,
    };
    this.props.onUpdateOrder(ord);
  }

  changeItemQuantity(index, evt) {
    const newItems = this.props.order.items;
    newItems[index].quantity = evt.target.value;
    const ord = {
      ...this.props.order,
      items: newItems,
    };
    this.props.onUpdateOrder(ord);
  }

  changeItemSubtotal(index, evt) {
    const newItems = this.props.order.items;
    newItems[index].subtotal = convertStringToNumber(evt.target.value);
    const ord = {
      ...this.props.order,
      items: newItems,
    };
    this.props.onUpdateOrder(ord);
  }

  changeAddressAddress(evt) {
    const ord = {
      ...this.props.order,
      address: {
        address: evt.target.value,
      },
    };
    this.props.onUpdateOrder(ord);
  }

  changeAddressName(evt) {
    const ord = {
      ...this.props.order,
      address: {
        name: evt.target.value,
      },
    };
    this.props.onUpdateOrder(ord);
  }

  changeAddressZip(evt) {
    const ord = {
      ...this.props.order,
      address: {
        zip: evt.target.value,
      },
    };
    this.props.onUpdateOrder(ord);
  }

  changeAddressTel(evt) {
    const ord = {
      ...this.props.order,
      address: {
        tel: evt.target.value,
      },
    };
    this.props.onUpdateOrder(ord);
  }

  changeAddressWeight(evt) {
    const ord = {
      ...this.props.order,
      address: {
        weight: evt.target.value,
      },
    };
    this.props.onUpdateOrder(ord);
  }

  render() {
    const { order, showModal } = this.props;

    let shippingContent = <div></div>;
    if (order.shipping != null) {
      shippingContent = order.shipping.map((item, index) => (
        <Row className="clearfix" key={`sitem-${index}`}>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="no"
              placeholder="no"
              type="text"
              value={item.no || ''}
              onChange={(evt) => this.changeShippingNo(index, evt)}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="url"
              placeholder="url"
              type="text"
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
            <FieldGroup
              label="status"
              placeholder="status"
              type="text"
              value={item.status || ''}
              onChange={(evt) => this.changeShippingStatus(index, evt)}
            />
          </Col>
        </Row>
            ));
    }

    let orderItemContent = <div></div>;
    if (order.items != null) {
      orderItemContent = order.items.map((item, index) => (
        <Row className="clearfix" key={`oitem-${index}`}>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="name"
              placeholder="name"
              type="text"
              value={item.name || ''}
              onChange={(evt) => this.changeItemName(index, evt)}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="url"
              placeholder="url"
              type="text"
              value={item.url || ''}
              onChange={(evt) => this.changeItemUrl(index, evt)}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="price"
              placeholder="price"
              type="text"
              value={item.price || ''}
              onChange={(evt) => this.changeItemPrice(index, evt)}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="quantity"
              placeholder="quantity"
              type="text"
              value={item.quantity || ''}
              onChange={(evt) => this.changeItemQuantity(index, evt)}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              label="subtotal"
              placeholder="subtotal"
              type="text"
              value={item.subtotal || ''}
              onChange={(evt) => this.changeItemSubtotal(index, evt)}
            />
          </Col>
        </Row>
            ));
    }

    let addressItemContent = <div></div>;
    if (order.address) {
      addressItemContent = (
        <Row className="clearfix">
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placekholder="Name"
              label="Name"
              value={order.address.name || ''}
              onChange={this.changeAddressName}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placekholder="Tel"
              label="Tel"
              value={order.address.tel || ''}
              onChange={this.changeAddressTel}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placekholder="Zip"
              label="Zip"
              value={order.address.zip || ''}
              onChange={this.changeAddressZip}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placekholder="Weight"
              label="Weight"
              value={order.address.weight || ''}
              onChange={this.changeAddressWeight}
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placekholder="Address"
              label="Address"
              value={order.address.address || ''}
              onChange={this.changeAddressAddress}
            />
          </Col>
        </Row>
            );
    }


    let content = <div></div>;
    if (order) {
      content = (
        <Modal show={showModal} onHide={this.props.onCloseOrder} bsSize="lg">
          <Modal.Header closeButton>
            <Modal.Title>Order Id: {order.orderId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PanelGroup defaultActiveKey="1" accordion>
              <Panel header="General" eventKey="1" expanded>
                <Row className="clearfix">
                  <Col lg={4} md={6} xs={12}>
                    <FieldGroup
                      id="formControlsText"
                      type="number"
                      placekholder="sub total"
                      label="Sub Total"
                      value={order.subtotal || ''}
                      onChange={this.changeSubtotal}
                    />
                  </Col>
                  <Col lg={4} md={6} xs={12}>
                    <FormGroup controlId="formControlsText">
                      <ControlLabel>Created</ControlLabel>
                      <DatePicker id="example-datepicker" value={order.created} onChange={this.changeCreatedDate} />
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} xs={12}>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Status</ControlLabel>
                      <FormControl componentClass="select" placeholder="Status" value={order.status || ''} onChange={this.changeStatus}>
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
                    <FieldGroup
                      id="formControlsText"
                      type="number"
                      placekholder="Total Cost"
                      label="Total Cost"
                      value={order.totalCost || ''}
                      onChange={this.changeTotalCost}
                    />
                  </Col>
                  <Col lg={4} md={6} xs={12}>
                    <FieldGroup
                      id="formControlsText"
                      type="number"
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
              </Panel>
              <Panel header="Order Item" eventKey="3">
                {orderItemContent}
              </Panel>
              <Panel header="Address" eventKey="4">
                {addressItemContent}
              </Panel>
            </PanelGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onSubmitUpdateForm}>Update</Button>
            <Button onClick={this.props.onCloseOrder}>Close</Button>
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
  onUpdateOrder: React.PropTypes.func,
  onCloseOrder: React.PropTypes.func,
  onSubmitUpdateForm: React.PropTypes.func,

};


export function mapDispatchToProps(dispatch) {
  return {
    onCloseOrder: () => dispatch(closeOrder()),
    onUpdateOrder: (order) => dispatch(updateOrder(order)),
    onSubmitUpdateForm: () => dispatch(submitUpdateForm()),
  };
}

const mapStateToProps = createStructuredSelector({
  order: makeSelectOrder(),
  showModal: makeSelectShowModal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
