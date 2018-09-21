import React from "react";
import PropTypes from "prop-types";

import TodoList from "./TodoList";

import "../styles/Todo.css";

class Todo extends React.Component {
  render() {
    let { todos, onCompletedTodo } = this.props;
    return(
      <div className="todo-wrap">
        <ul className="todo">
          {
            todos.map((todo,index) => 
              <TodoList {...todo} key={index} index={index+1} onCompletedTodo={() => onCompletedTodo(index)} />
            )
          }
          {
            <li style={{display: todos.length>0?'none':'block',textAlign:'center',paddingBottom: "15px"}}>暂无待办项</li>
          }
        </ul>
      </div>
    )
  }
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onCompletedTodo: PropTypes.func.isRequired
}

export default Todo;