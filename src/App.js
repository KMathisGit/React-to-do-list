import React from "react";
import "./App.css";
import List from "./Components/List/List";
import TodoForm from "./Components/TodoForm/TodoForm";

var todoItems = [
  { title: "Create React App", complete: true },
  { title: "Learn React", complete: true },
  { title: "Build Todo List", complete: false }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: todoItems };
  }

  removeItem = index => {
    this.state.todoItems.splice(index, 1);
    this.setState({ todoItems: this.state.todoItems });
  };

  addItem = item => {
    let alreadyExists = false;

    // check if item already exists
    for (let i = 0; i < this.state.todoItems.length; i++) {
      if (item.title === this.state.todoItems[i].title) {
        alreadyExists = true;
        break;
      }
    }

    if (!alreadyExists) {
      this.state.todoItems.push(item);
      this.setState({ todoItems: this.state.todoItems });
    } else {
      alert("Already got that one dummy!");
    }
  };

  toggleComplete = item => {
    item.complete = !item.complete;
    this.setState({ todoItems: this.state.todoItems });
  };

  render() {
    return (
      <div className="App">
        <h3 className="App-header">Todo-list</h3>
        <div class="todo-container">
          <TodoForm addItem={this.addItem}></TodoForm>
          <List
            todoItems={this.state.todoItems}
            removeItem={this.removeItem}
            toggleComplete={this.toggleComplete}
          ></List>
        </div>
      </div>
    );
  }
}

export default App;
