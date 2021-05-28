import React from 'react'
import ButtonPanel from './ButtonPanel'
import Display from './Display'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Display />
        <ButtonPanel />
      </React.Fragment>
    )
  }
}

export default App
