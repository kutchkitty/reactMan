import React from 'react'
import './counter.less'

class Counter extends React.Component{

    constructor(props) {
        console.log('enter constructor: ' + props.caption);
        super(props);
    
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    
        this.state = {
          count: props.initValue 
        }
      }

      onClickIncrementButton() {
        this.setState({
            count: this.state.count + 1
        });
      }

      onClickDecrementButton() {
        this.setState({
            count: this.state.count - 1
        });
      }

    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
          <div className="counter">
            <button style={{'margin':'10px'}} onClick={this.onClickIncrementButton}>+</button>
            <button style={{'margin':'10px'}} onClick={this.onClickDecrementButton}>-</button>
            <span>{caption} count: {this.state.count}</span>
          </div>
        );
      }
}
export default Counter