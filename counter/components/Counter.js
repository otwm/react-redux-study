import React, {Component, PropTypes} from 'react'

class Counter extends Component {
    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked: {value} times
            </p>
        )
    }
}

export default Counter;