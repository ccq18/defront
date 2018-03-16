import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo} from './demo';

class AddTodo extends Component {
  render() {
    return (
        <div>
          <input type='text' ref='input'/>
          <button onClick={e => this.handleClick(e)}>
            Add
          </button>
        </div>
    );
  }

  handleClick(e) {
    const { dispatch} = this.props

    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    dispatch(addTodo(text));
    node.value = '';
  }
}

// AddTodo.propTypes = {
//   onAddClick: PropTypes.func.isRequired,
// };

export default connect((state) => ({todo: state.todo}))(AddTodo);