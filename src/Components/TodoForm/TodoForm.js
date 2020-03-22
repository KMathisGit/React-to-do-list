import React from "react";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.props.addItem;
  }

  componentDidMount() {
      this.refs.todoItem.focus();
  }

  render() {
    return (
      <form ref="todoForm">
          <input type="text" ref="todoItem" />
          <button type="button" onClick={() => {this.addItem({ title: this.refs.todoItem.value, complete: false })}}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
