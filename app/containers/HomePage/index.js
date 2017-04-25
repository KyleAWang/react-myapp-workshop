import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect }  from 'react-redux';
import { makeSelectContent } from 'containers/App/selectors';
import { sayHyllo } from 'containers/App/actions';



export class HomePage extends React.PureComponent{
    componentDidMount(){
        this.props.getContent();
    }

    render() {
        const { content } = this.props;
        return (
            <div>
                Hello Home page
                <p>{content}</p>
            </div>
        );
    };
}

HomePage.propTypes = {
    content: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string,
    ]),
};

export function mapDispatchToProps(dispatch) {
    return {
        getContent: () => dispatch(sayHyllo('kyle')),
    }
}

const mapStateToProps = createStructuredSelector({
    content: makeSelectContent(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);