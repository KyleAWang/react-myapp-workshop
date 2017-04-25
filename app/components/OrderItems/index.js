import React from 'react';

import OrderItem from 'components/OrderItem';


class OrderItems extends React.Component{

    render(){
        const items = this.props.items;
        const content = items.map((item, index) => (
            <OrderItem item={item} key={`oitem-${index}`}/>
        ));

        return (
            <div>
                {content}
            </div>
        );
    }
}

OrderItems.propTypes = {
    items: React.PropTypes.array,
};

export default OrderItems;