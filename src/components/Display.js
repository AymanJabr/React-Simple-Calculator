import React from 'react'
import PropTypes from 'prop-types'

class Display extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.calculationResult}
            </div>
        )
    }
}

Display.propTypes = {
    calculationResult: PropTypes.string.isRequired
}

Display.defaultProps = {
    calculationResult: '0'
}

export default Display
