import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  let handleClick = (buttonName) => {
    return props.clickHandler(buttonName)
  }

  const { buttonName } = props;
  return (
    <div >
      {' '}
      <button onClick={handleClick(buttonName)}> {buttonName} </button>
      {' '}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
