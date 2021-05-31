import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const handleClick = (buttonName) => props.clickHandler(buttonName);

  return (
    <div className="ButtonPanel">
      <div className="Group">
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button color buttonName="/" clickHandler={handleClick} />
      </div>

      <div className="Group">
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button color buttonName="X" clickHandler={handleClick} />
      </div>

      <div className="Group">
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button color buttonName="-" clickHandler={handleClick} />
      </div>

      <div className="Group">
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button color buttonName="+" clickHandler={handleClick} />
      </div>

      <div className="Group">
        <Button wide buttonName="0" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button color buttonName="=" clickHandler={handleClick} />
      </div>

    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
