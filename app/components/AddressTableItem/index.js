import React from 'react';
import { Table, Button, Modal, Popover, Tooltip, Panel, PanelGroup, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock } from 'react-bootstrap';
import FieldGroup from 'components/FieldGroup';


function AddressTableItem(props) {
    const address = props.address;

    let content = (<div></div>);
    if(address){
        content = (
            <Row className="clearfix">
                <Col lg={4} md={6} xs={12}>
                    <FieldGroup id="formControlsText"
                                type="text"
                                placekholder="Name"
                                label="Name"
                                value={address.name}
                                onChange={props.changeAddressName.bind(this, evt.target.value)}
                    />
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <FieldGroup id="formControlsText"
                                type="text"
                                placekholder="Tel"
                                label="Tel"
                                value={address.tel}
                                onChange={props.changeAddressTel.bind(this, evt.target.value)}
                    />
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <FieldGroup id="formControlsText"
                                type="text"
                                placekholder="Zip"
                                label="Zip"
                                value={address.zip}
                                onChange={props.changeAddressZip.bind(this, evt.target.value)}
                    />
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <FieldGroup id="formControlsText"
                                type="text"
                                placekholder="Weight"
                                label="Weight"
                                value={address.weight}
                                onChange={props.changeAddressWeight.bind(this, evt.target.value)}
                    />
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <FieldGroup id="formControlsText"
                                type="text"
                                placekholder="Address"
                                label="Address"
                                value={address.address}
                                onChange={props.changeAddressAddress.bind(this, evt.target.value)}
                    />
                </Col>
            </Row>
        )
    }

    return content;
}

AddressTableItem.propTypes = {
    address: React.PropTypes.object,
    changeAddressName: React.PropTypes.func,
    changeAddressTel: React.PropTypes.func,
    changeAddressZip: React.PropTypes.func,
    changeAddressWeight: React.PropTypes.func,
    changeAddressAddress: React.PropTypes.func,
};

export default AddressTableItem;