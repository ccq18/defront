import React, { Component } from 'react';
import  { PropTypes } from 'prop-types';


import { connect } from 'react-redux';
import { addTodo, setVisibilityFilter, VisibilityFilters } from './demo';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';


class AppTodo extends Component {
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibilityFilter } = this.props
    return (
        <div>
          <AddTodo/>
          <TodoList
              todo={this.props.visibleTodos}
              onTodoClick={index =>{}}
               />
          <Footer
              filter={visibilityFilter}
              onFilterChange={nextFilter =>
                  dispatch(setVisibilityFilter(nextFilter))
              } />
        </div>
    )
  }
}

AppTodo.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect((state)=> {
  return {
    visibleTodos: selectTodos(state.todo, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
})(AppTodo);