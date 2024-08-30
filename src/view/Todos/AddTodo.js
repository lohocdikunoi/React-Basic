import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  HandleChangeTodo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  HandleClickAdd = () => {
    if (!this.state.title) {
      toast.error("Missing Title's todo!");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };

    this.props.AddNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="Todo">
        <input
          type="text"
          className="Add-Todo"
          value={this.state.title}
          onChange={(event) => this.HandleChangeTodo(event)}
        />
        <button className="add" onClick={() => this.HandleClickAdd()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
