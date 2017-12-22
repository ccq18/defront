import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions/demo'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

let _console = function(oldFunc,msg='') {
  return (...options) => {
    let rs = oldFunc(...options)
    // console.log(msg,rs)
    return rs
  }
}
visibilityFilter = _console(visibilityFilter,'visibilityFilter')
todo = _console(todo,'todo')

const reducers = {
  visibilityFilter,
  todo
}

export default reducers