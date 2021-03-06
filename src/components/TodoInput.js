import React, { Component } from 'react'
import {connect} from "react-redux";

class TodoInput extends Component{

    clickHandle = (e) =>{
        console.log("clickHandle")
        this.props.dispatch({
            type:'add',
            data:'...'
        })
    }

    render() {
        return (
            <div>
                <h3>TodoInput</h3>
                <button onClick={this.clickHandle}>Click</button>
            </div>
        )
    }
}

export default connect()(TodoInput)