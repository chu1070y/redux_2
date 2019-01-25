import React, { Component } from 'react'
import {connect} from "react-redux";

class TodoList extends Component{

    removeHandler = (e) => {
        const target = e.target.getAttribute("data-idx")
        console.log(target)
        this.props.dispatch({type:"remove",data:target})
    }

    render() {
        const arr = this.props.arr.map((str,index) => <li key={index}>{str} <button data-idx={index} onClick={this.removeHandler}>X</button></li>)

        return (
            <div>
                <h3>TodoList</h3>
                <ul>{arr}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arr: state
    }
}

export default connect(mapStateToProps)(TodoList)