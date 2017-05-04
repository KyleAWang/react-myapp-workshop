import React from 'react';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import FieldGroup from 'components/FieldGroup';

class OrderTableItem extends React.PureComponent{

    render(){
        const orders = this.props.orders;

        let content = (<div></div>);

        if(orders){
            content = orders.map((item, index) => (
                <Row className="clearfix" key={`oitem-${index}`}>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='name'
                                    placeholder='name'
                                    type='text'
                                    value={item.name}
                                    onChange={this.props.changeItemName.bind(this, item.name)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='url'
                                    placeholder='url'
                                    type='text'
                                    value={item.url}
                                    onChange={this.props.changeItemUrl.bind(this, item.url)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='price'
                                    placeholder='price'
                                    type='text'
                                    value={item.price}
                                    onChange={this.props.changeItemPrice.bind(this, item.price)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='quantity'
                                    placeholder='quantity'
                                    type='text'
                                    value={item.quantity}
                                    onChange={this.props.changeItemQuantity.bind(this, item.quantity)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='subtotal'
                                    placeholder='subtotal'
                                    type='text'
                                    value={item.subtotal}
                                    onChange={this.props.changeItemSubtotal.bind(this, item.subtotal)}
                        />
                    </Col>
                </Row>
            ));
        }

        return (
            <span>
                {content}
            </span>
        );
    }
}

OrderTableItem.propTypes = {
    orders: React.PropTypes.array,
    changeItemName: React.PropTypes.func,
    changeItemUrl: React.PropTypes.func,
    changeItemPrice: React.PropTypes.func,
    changeItemQuantity: React.PropTypes.func,
    changeItemSubtotal: React.PropTypes.func,
};

export default OrderTableItem;