import React from 'react';
import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import Footer from "../components/Footer";

import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from "../store/actions";
const {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} = VISIBILITY_FILTERS;

class App extends React.Component {
  render() {
    let {visibleTodos,visibleFilter,dispatch} = this.props;
    return (
      <div className="container">
        <AddTodo 
          onAddTodo={ text =>
            dispatch(addTodo(text))
          }/>
        <Todo
          todos={visibleTodos}
          onCompletedTodo={ id =>
            dispatch(completeTodo(id))
          }/>
        <Footer
          filter={visibleFilter}
          onChangeFilter={ filter =>
            dispatch(setVisibilityFilter(filter))
          } />
      </div>
    );
  }
}

const selectTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return;
  }
}

const select = state => {
  return {
    visibleTodos: selectTodos(state.todos, state.setVisible),
    visibleFilter: state.setVisible
  }
}

export default connect(select)(App);
