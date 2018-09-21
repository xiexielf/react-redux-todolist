/**
 * reducer 是一个纯函数
 * 传入旧状态和action
 * 返回新状态
 */
import { combineReducers } from "redux";

import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from "./actions";

const {SHOW_ALL} = VISIBILITY_FILTERS;

// 待办项响应
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text:action.text,
        completed: false,
      }]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.id), 
        Object.assign({},state[action.id],{
          completed: true
        }),
        ...state.slice(action.id + 1)
      ]
    default:
      return state;
  }
}

// 过滤器响应
const setVisible = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// 不同响应合并为一个reducer
const todoApp = combineReducers({
  todos,
  setVisible
})

export default todoApp;