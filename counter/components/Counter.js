import React, {Component, PropTypes} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    /**
     * 홀수 라면 증가 시킨다.
     */
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    /**
     * 1초후 증가
     */
    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        /**
         * 증가나 감소 같은 실제 로직연산은 프로퍼티로서 받는다.
         */
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked: {value} times
                {'  '}
                <button onClick={onIncrement}>
                    +
                </button>
                {'  '}
                <button onClick={onDecrement}>
                    -
                </button>
                {'  '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {'  '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;