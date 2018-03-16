/*
 * action 类型
 */

export const ADD_TODO = 'MIN_TODO_ADD_TODO';


/*
 * 其它的常量
 */



/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}


