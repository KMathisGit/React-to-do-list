import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

class List extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todoItems.map((val, index) => {
          return (
            <ListItem
              key={index}
              index={index}
              val={val}
              removeItem={this.props.removeItem}
              toggleComplete={this.props.toggleComplete}
            ></ListItem>
          );
        })}
      </ul>
    );
  }
}

export default List;
