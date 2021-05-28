import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-useless-constructor */

/* eslint-disable react/prefer-stateless-function */

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.buttonName}
      </div>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
