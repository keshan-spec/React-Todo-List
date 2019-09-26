import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Components/ToDos";
import Header from "./Components/Layouts/Header";

import "./App.css";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "TODO 1",
        isDone: false
      },
      {
        id: 2,
        title: "TODO 2",
        isDone: false
      },
      {
        id: 3,
        title: "TODO 3",
        isDone: false
      }
    ]
  };

  // Mark as complete
  onComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    });
  };

  // delete task
  delTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Todos
            Todos={this.state.todos}
            onComplete={this.onComplete}
            delTask={this.delTodo}
          />
        </Router>
      </div>
    );
  }
}

export default App;
