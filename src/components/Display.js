import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const {
    total, next, operation,
  } = props;
  return (
    <div className="Display">
      {total}
      {operation}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: ' ',
  next: ' ',
};

export default Display;
