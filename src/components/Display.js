import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-useless-constructor */

/* eslint-disable react/prefer-stateless-function */

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.calculationResult}

      </div>
    );
  }
}

Display.propTypes = {
  calculationResult: PropTypes.string,
};

Display.defaultProps = {
  calculationResult: '0',
};

export default Display;
