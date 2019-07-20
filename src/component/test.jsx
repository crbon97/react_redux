import React, { Component } from "react";
import { connect } from "react-redux";
class test extends Component {
  

  render() {
    const {todos} =  this.props;
    return (
      <div className="view_App">
          <div>
          <ul>
              {todos&&todos.map((props,index)=>{
                 return <li key={index}>Name : {props.name} - AGE: {props.age}</li>
              })}
          </ul>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.getItem
  }
}

export default connect(mapStateToProps )(test);
