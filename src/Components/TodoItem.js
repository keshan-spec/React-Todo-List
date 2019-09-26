import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  GetStyle = () => {
    return {
      transition: "all easin-in .5s",
      background: "#f1f1f1",
      padding: "10px",
      margin: "15px",
      textDecoration: this.props.todo.isDone ? "line-through" : "none"
    };
  };

  btnStyle = () => {
    return {
      background: "red",
      padding: "10px",
      marginLeft: "10px",
      border: "none",
      color: "white",
      borderRadius: "16px",
      outline: "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.GetStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.onComplete.bind(this, id)}
          />
          {title}
          <button
            style={this.btnStyle()}
            onClick={this.props.delTask.bind(this, id)}
          >
            Delete task
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
