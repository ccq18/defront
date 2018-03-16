import {
    ADD_TODO,
} from './actions'


export function mintodos(state = [], action) {
    console.log('mintodos')
    switch (action.type) {
        //将action的内容重的text放入state
        case ADD_TODO:
            return [
                ...state,
                {
                    id:Math.random(),
                    text: action.text,
                    completed: false
                }
            ];
        case "SET_VISIBILITY_FILTER":
            console.log('SET_VISIBILITY_FILTER')
            return state;

        default:
            return state
    }
}

// export default reducers;