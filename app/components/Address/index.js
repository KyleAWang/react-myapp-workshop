import React from 'react';
import './styles/index.scss';

function Address(props) {
  const address = props.address;

  let content = <div></div>;
  if (address) {
    content = (
      <ul>
        <li>{address.name}</li>
        <li><span>Tel:</span><span>{address.tel}</span></li>
        <li>{address.address}</li>
        <li>{address.weight}</li>
      </ul>);
  }
  return content;
}


Address.propTypes = {
  address: React.PropTypes.object,
};

export default Address;
