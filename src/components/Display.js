import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { calculationResult } = props;
  return (
    <div>
      {' '}
      {calculationResult}
      {' '}
    </div>
  );
}

Display.propTypes = {
  calculationResult: PropTypes.string,
};

Display.defaultProps = {
  calculationResult: '0',
};

export default Display;
