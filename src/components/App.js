import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
/* eslint-enable no-unused-vars */

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {total: null, operation: null, next: null}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (buttonName) => {
    let {next, total, operation} = calculate(this.state,buttonName)

    this.setState({ total: total, next: next, operation: operation})
  }

  render(){
    return (
    <>
      <Display total = {this.state.total} next = {this.state.next}/>
      <ButtonPanel clickHandler = {this.handleClick}/>
    </>
    )
  }
   
    
  
}

export default App;
