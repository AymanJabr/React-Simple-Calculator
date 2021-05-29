import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const handleClick = (buttonName) => props.clickHandler(buttonName);

  const { buttonName } = props;
  return (
    <div>
      {' '}
      <button type="button" onClick={handleClick}>
        {' '}
        {buttonName}
        {' '}
      </button>
      {' '}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
