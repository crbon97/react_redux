import React, { Component } from "react";
import './App.css';
import {connect} from "react-redux";
import {actGetItem} from "./actions/action"
import TEST from "./component/test"
class App extends Component {
  
 _getItem=()=>{
  this.props.getItem();

 }
  render() {
    const {todos} =  this.props;
    console.log(todos);
    return (
      <div className="view_App">
        <div> <button onClick={this._getItem}>Get Item</button></div>
        <TEST/>
          {/* <div>
          <ul>
              {todos&&todos.map((props,index)=>{
                 return <li key={index}>Name : {props.name} - AGE: {props.age}</li>
              })}
          </ul>
          </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.getItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getItem:() => {
      dispatch(actGetItem())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(App);
