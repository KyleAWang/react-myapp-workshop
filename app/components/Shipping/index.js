import React from 'react';

import ShippingItem from 'components/ShippingItem';

export default function Shipping(props) {
  const shipping = props.shipping;

  let content = (<div></div>);
  if (shipping) {
    content = shipping.map((item, index) => (
      <ShippingItem shippingItem={item} key={`sitem-${index}`} />
            ));
  }

  return (
    <div>
      {content}
    </div>
  );
}

Shipping.propTypes = {
  shipping: React.PropTypes.array,
};
