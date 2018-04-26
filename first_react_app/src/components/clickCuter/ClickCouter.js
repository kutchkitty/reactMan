import React from 'react'
import ControlPanel from '../ControlPanel'

class ClickCouter extends React.Component{
    constructor(props){
        super(props)
        this.onClickButton = this.onClickButton.bind(this)
        this.state = {
            count:0
        }
    }

    onClickButton(){
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickButton}>点击新增</button>
                <span>现在的数字为：{this.state.count}</span>
                <ControlPanel />
            </div>
        )
    }
}
export default ClickCouter
