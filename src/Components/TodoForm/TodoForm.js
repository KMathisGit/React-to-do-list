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

  submitForm = e => {
    e.preventDefault();
    let item = {
      title: this.refs.todoItem.value,
      complete: false
    };
    this.addItem(item);
    this.refs.todoItem.value = "";
  };

  render() {
    return (
      <form ref="todoForm" onSubmit={this.submitForm}>
        <input type="text" ref="todoItem" />
        <button type="submit" ref="addBtn">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
