import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {this.props.buttonName}
            </div>
        )
    }
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired
}

export default Button
