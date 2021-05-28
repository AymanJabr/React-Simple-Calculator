import React from 'react';
import Button from './Button';

/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-useless-constructor */

/* eslint-disable react/prefer-stateless-function */

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Group-1">
          <Button buttonName="AC" />
          <Button buttonName="+/-" />
          <Button buttonName="%" />
          <Button buttonName="/" />
        </div>

        <div className="Group-2">
          <Button buttonName="7" />
          <Button buttonName="8" />
          <Button buttonName="9" />
          <Button buttonName="X" />
        </div>

        <div className="Group-3">
          <Button buttonName="4" />
          <Button buttonName="5" />
          <Button buttonName="6" />
          <Button buttonName="-" />
        </div>

        <div className="Group-4">
          <Button buttonName="1" />
          <Button buttonName="2" />
          <Button buttonName="3" />
          <Button buttonName="+" />
        </div>

        <div className="Group-5">
          <Button buttonName="0" />
          <Button buttonName="." />
          <Button buttonName="=" />
        </div>

      </>
    );
  }
}

export default ButtonPanel;
