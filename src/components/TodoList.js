import React from "react";
import PropTypes from "prop-types";

class TodoList extends React.Component {
  render() {
    const { text, completed, onCompletedTodo, index} = this.props;
    return(
      <li className="todo-list"
        onClick={onCompletedTodo}
        style={{
          textDecoration: completed?"line-through":"none",
          cursor: completed ? 'default' : 'pointer'
        }}>
        {index}：{text}
      </li>
    )
  }
}

TodoList.propTypes = {
  onCompletedTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoList;