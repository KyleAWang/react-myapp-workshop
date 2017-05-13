import React from 'react';

import OrderItem from 'components/OrderItem';


export default function OrderItems(props) {
  const items = props.items;
  const content = items.map((item, index) => (
    <OrderItem item={item} key={`oitem-${index}`} />
        ));

  return (
    <div>
      {content}
    </div>
  );
}

OrderItems.propTypes = {
  items: React.PropTypes.array,
};
