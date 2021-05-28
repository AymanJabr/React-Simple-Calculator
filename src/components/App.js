import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-useless-constructor */

/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
