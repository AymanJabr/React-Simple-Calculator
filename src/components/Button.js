import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const handleClick = () => props.clickHandler(props.buttonName);

  const { buttonName, wide, color } = props;
  return (
    <button className={`Button ${wide ? 'DoubleButton' : ''} ${color ? ' Color' : ''}`} type="button" onClick={handleClick}>

      {' '}
      {buttonName}
      {' '}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: false,
};

export default Button;
