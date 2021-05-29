import React from 'react';
import Button from './Button';


function ButtonPanel(props) {

  let handleClick = (buttonName) => {
    return props.clickHandler(buttonName)
  }

  return (
    <>
      <div className="Group-1">
        <Button buttonName="AC"  clickHandler = {handleClick}/>
        <Button buttonName="+/-"  clickHandler = {handleClick}/>
        <Button buttonName="%"  clickHandler = {handleClick}/>
        <Button buttonName="/"  clickHandler = {handleClick}/>
      </div>

      <div className="Group-2">
        <Button buttonName="7" clickHandler = {handleClick}/>
        <Button buttonName="8" clickHandler = {handleClick}/>
        <Button buttonName="9" clickHandler = {handleClick}/>
        <Button buttonName="X" clickHandler = {handleClick}/>
      </div>

      <div className="Group-3">
        <Button buttonName="4" clickHandler = {handleClick}/>
        <Button buttonName="5"  clickHandler = {handleClick}/>
        <Button buttonName="6"  clickHandler = {handleClick}/>
        <Button buttonName="-"  clickHandler = {handleClick}/>
      </div>

      <div className="Group-4">
        <Button buttonName="1"  clickHandler = {handleClick}/>
        <Button buttonName="2" clickHandler = {handleClick}/>
        <Button buttonName="3"  clickHandler = {handleClick}/>
        <Button buttonName="+" clickHandler = {handleClick}/>
      </div>

      <div className="Group-5">
        <Button buttonName="0"  clickHandler = {handleClick}/>
        <Button buttonName="."  clickHandler = {handleClick}/>
        <Button buttonName="="  clickHandler = {handleClick}/>
      </div>

    </>
  );
}

export default ButtonPanel;
