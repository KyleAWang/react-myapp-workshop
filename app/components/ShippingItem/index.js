import React from 'react';

export default function ShippingItem(props) {
  const shippingItem = props.shippingItem;

  const content = (
    <a href={shippingItem.url} target="_blank">
      {shippingItem.no}, {shippingItem.status}
    </a>
        );
  return (
    <div>
      {content}
    </div>
  );
}

ShippingItem.propTypes = {
  shippingItem: React.PropTypes.object,
};
