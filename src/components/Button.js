import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const handleClick = () => props.clickHandler(props.buttonName);

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
