import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectContent } from 'containers/App/selectors';

export class HomePage extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <div>
                Hello Home page
                <p>{content}</p>
      </div>
    );
  }
}

HomePage.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

export default connect(mapStateToProps, null)(HomePage);
