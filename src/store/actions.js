/**
 * action 类型名称
 */
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/**
 * 过滤器类型常量
 */
export const VISIBILITY_FILTERS = {
  SHOW_ALL: "SHOW_ALL",             //显示全部
  SHOW_COMPLETED: "SHOW_COMPLETED", //显示已完成
  SHOW_ACTIVE: "SHOW_ACTIVE"        //显示未完成
}

/**
 * 用户添加待办项
 * @param {text} text 为添加的待办项名称
 */
export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  }
}
/**
 * 用户完成待办项
 * @param {id} id 为对应待办项的id，id是唯一的 
 */
export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    id
  }
}
/**
 * 根据过滤器类型显示对应的待办项
 * @param {filter} filter 为过滤器类型
 */
export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}