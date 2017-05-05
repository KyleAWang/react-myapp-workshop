import React from 'react';


function Address(props) {
    const address = props.address;

    let content = <div></div>
    if (address) {
        content = (<div>
            <div>{address.name},{address.tel}</div>
            <div>{address.address}</div>
            <div>weight: {address.weight}</div>
        </div>);
    }
    return content;
}


Address.propTypes = {
    address: React.PropTypes.object,
};

export default Address;