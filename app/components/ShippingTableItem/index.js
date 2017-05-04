import React from 'react';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import FieldGroup from 'components/FieldGroup';

class ShippingTableItem extends React.PureComponent{

    render(){
        const shipping = this.props.shipping;

        let content = (<div></div>);

        if(shipping){
            content = shipping.map((item, index) => (
                <Row className="clearfix" key={`sitem-${index}`}>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='no'
                                    placeholder='no'
                                    type='text'
                                    value={item.no}
                                    onChange={this.props.changeShippingNo(this, target.value)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='url'
                                    placeholder='url'
                                    type='text'
                                    value={item.url}
                                    onChange={this.props.changeShippingUrl.bind(this, target.value)}
                        />
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Items</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                placeholder="textarea"
                                value={item.items}
                                onChange={this.props.changeShippingItems.bind(this, target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <FieldGroup label='status'
                                    placeholder='status'
                                    type='text'
                                    value={item.status}
                                    onChange={this.props.changeShippingStatus.bind(this, target.value)}
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

ShippingTableItem.propTypes = {
    shipping: React.PropTypes.array,
    changeShippingNo: React.PropTypes.func,
    changeShippingUrl: React.PropTypes.func,
    changeShippingItems: React.PropTypes.func,
    changeShippingStatus: React.PropTypes.func,
};

export default ShippingTableItem;