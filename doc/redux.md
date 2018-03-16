## action
Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。
多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
actionTypes.js
```
const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
使用
```
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'

```

ps:
使用单独的模块或文件来定义 action type 常量并不是必须的，甚至根本不需要定义。对于小应用来说，使用字符串做 action type
更方便些。不过，在大型应用中把它们显式地定义成常量还是利大于弊的。参照 减少样板代码 获取更多保持代码简洁的实践经验。

### Action 创建函数
Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
在 Redux 中的 action 创建函数只是简单的返回一个 action:
```
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
dispatch(addTodo(text))
```



## Reducer
reducer 只是一个接收 state 和 action，并返回新的 state 的函数。
ps：即对action 的动作做处理并把结果放入state
### Action 处理
现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
```
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  default:
    return state;
  }
}
//调用子reducer 返回整个应用的状态
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
```

## Store
### 作用
维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。
### 使用
```
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)
```

## 配合react

### 在基组件传入 Store

```
import React from 'react';
import Routes from '../Routes';

import reducers from '../reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

const App = ()=>{
    let store = createStore(
        combineReducers(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return <Provider store={store}>
      <Routes/>
    </Provider>;
}

export default App;

```
###  组件导出时使用connect连接redux

export connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
```
const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}
```

mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户
的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
```
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  };
}
```
### demo
查看mintodos 和todos




### 监听stroe更改
```
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();
```