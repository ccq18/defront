import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import {connect} from 'react-redux'

const TodoList = ({propstodo}) => (
    <ul>
        {propstodo.map((todo, index) => (
            <Todo key={index} {...todo} />
        ))}
    </ul>
)
//定义变量类型
TodoList.propTypes = {
    propstodo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};
//mapDispatchToProps 可以是函数 也可以直接是返回的对象
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

//连接属性和state
export default connect(
    state => {
        return {
            //属性： state属性
            propstodo: state.mintodos
        }
    },
    mapDispatchToProps
)(TodoList);