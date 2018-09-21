import React from "react";
import PropTypes from "prop-types";
import "../styles/AddTodo.css";

class AddTodo extends React.Component {
  handleAddClick(e) {
    e.preventDefault();
    let value  = this.refs.input.value;
    this.props.onAddTodo(value);
    this.refs.input.value = "";
  }
  render() {
    return(
      <div className="add-todo">
        <input className="add-input" type="text" ref="input" placeholder="请输入内容..."/>
        <button className="add-btn" onClick={e => this.handleAddClick(e)}>添加</button>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default AddTodo;