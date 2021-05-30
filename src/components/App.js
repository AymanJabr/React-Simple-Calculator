import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, operation: null, next: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { next, total, operation } = calculate(this.state, buttonName);

    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
