import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = props.removeItem;
    this.toggleComplete = props.toggleComplete;
    this.complete = this.props.val.complete;
  }

  render() {
    return (
      <li
        id={`todo-item-${this.props.index}`}
        className={this.complete ? "complete" : ""}
        onClick={() => this.toggleComplete(this)}
      >
        <span>{this.props.val.title}</span>
        <button onClick={() => this.removeItem(this.props.index)}>
          Remove
        </button>
      </li>
    );
  }
}

export default ListItem;
