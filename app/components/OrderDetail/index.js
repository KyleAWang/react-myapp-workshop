import React from 'react';
import { FormattedDate, FormattedNumber, FormattedTime } from 'react-intl';
import { Table, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

import Address from 'components/Address';
import OrderItems from 'components/OrderItems';
import Shipping from 'components/Shipping';


class OrderDetail extends React.PureComponent{

    render(){
        const { item, index } = this.props;

        const content = (
            <tr>
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
        );

        return (
            {content}
        );
    }
}

OrderDetail.propTypes = {
    item: React.PropTypes.object,
    index: React.PropTypes.number,
};


export default OrderDetail;