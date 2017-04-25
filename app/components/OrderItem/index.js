import React from 'react';


function OrderItem(props) {
    const item = props.item;
    let content = 'loading...';
    if (item){
        content = (
            <a href={item.url} target="_blank">
                {item.name},{item.quantity}*{item.price}={item.subtotal}
            </a>
        );
    }
    return (
        <div>
            {content}
        </div>
    );
}

OrderItem.propTypes = {
    item: React.PropTypes.object,
};


export default OrderItem;