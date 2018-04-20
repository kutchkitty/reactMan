import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component{
    static PropTypes={
        caption: PropTypes.string.isRequired,
        initValue: PropTypes.number,
        onUpdate: PropTypes.func
    }
    static defaultProps = {
        initValue: 0,
        onUpdate: f => f 
    }

    constructor (props) {
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.initValues = [ 0, 10, 20]
        const initSum = this.initValues.reduce((a, b) => a+b , ) 
        this.state= {
            sum: initSum
        }
    }
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue
        this.setState({ 
            sum: this.state.sum+ valueChange
        })
    }
    render() {
        return (
        <div style={style}>
            <Counter 
                onUpdate={this.onCounterUpdate} 
                caption=' First'
            />
            <Counter 
                onUpdate= {this.onCounterUpdate} 
                caption='Second' 
                initValue={this.initValues[l]} 
            />
            <Counter 
                onUpdate= {this.onCounterUpdate} 
                caption='Third'
                initValue={this.initValues[2]} 
            />
        <hr/>
        <div>Total Count: {this.state.sum}</div>
        </div>
        )
    }
}
export default Counter