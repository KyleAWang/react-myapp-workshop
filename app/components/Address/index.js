import React from 'react';


function Address(props) {
    const address = props.address;

    return (
        <div>
            <div>{address.name},{address.tel}</div>
            <div>{address.address}</div>
            <div>weight: {address.weight}</div>
        </div>
    )
}


Address.propTypes = {
    address: React.PropTypes.object.isRequired,
};

export default Address;