import React from 'react';

class ShippingItem extends React.PureComponent{
    render(){
        const shippingItem = this.props.shippingItem;

        const content = (
            <a href={shippingItem.url} target="_blank">
                {shippingItem.no}, {shippingItem.status}
            </a>
        )
        return(
            <div>
                {content}
            </div>
        );
    }
}

ShippingItem.propTypes = {
    shippingItem: React.PropTypes.object,
};

export default ShippingItem;