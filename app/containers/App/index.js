import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';

function App(props) {
    return (
        <div>
            <Header/>
            <div>
                {React.Children.toArray(props.children)}
            </div>
        </div>
    );
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;