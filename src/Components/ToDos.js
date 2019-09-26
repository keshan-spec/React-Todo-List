import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.Todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onComplete={this.props.onComplete}
        delTask={this.props.delTask}
      />
    ));
  }
}

Todos.propTypes = {
  Todos: PropTypes.array.isRequired
};

export default Todos;
