import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodo: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Marking Videos" },
      { id: "todo3", title: "Fixing Bugs" },
    ],
    EditTodo: {},
  };

  AddNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo],
    });
    toast.success("Wow so easy!");
  };

  HandleDeleteTodo = (todo) => {
    let CurrentTodo = this.state.ListTodo;
    CurrentTodo = CurrentTodo.filter((item) => item.id !== todo.id);

    this.setState({
      ListTodo: CurrentTodo,
    });

    toast.success("Delete Succeed!");
  };

  HandleEditTodo = (todo) => {
    let { EditTodo, ListTodo } = this.state;

    let isEmptyObj = Object.keys(EditTodo).length === 0;

    if (isEmptyObj === false && EditTodo.id === todo.id) {
      let ListTodoCopy = [...ListTodo];

      let objIndex = ListTodoCopy.findIndex((item) => item.id === todo.id);

      ListTodoCopy[objIndex].title = EditTodo.title;

      this.setState({
        ListTodo: ListTodoCopy,
        EditTodo: {},
      });

      toast.success("Update Todo Succeed!");
      return;
    }

    this.setState({
      EditTodo: todo,
    });
  };

  HandleChangeEditTodo = (event) => {
    let EditTodoCopy = { ...this.state.EditTodo };
    EditTodoCopy.title = event.target.value;
    this.setState({
      EditTodo: EditTodoCopy,
    });
  };

  render() {
    let { ListTodo, EditTodo } = this.state;
    let isEmptyObj = Object.keys(EditTodo).length === 0;
    return (
      <>
        <div className="Todo-Container">
          <AddTodo AddNewTodo={this.AddNewTodo} />
          <div className="List-Todo">
            {ListTodo &&
              ListTodo.length > 0 &&
              ListTodo.map((item, index) => {
                return (
                  <div className="Item-Todo" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {EditTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={EditTodo.title}
                              onChange={(event) =>
                                this.HandleChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.HandleEditTodo(item)}
                    >
                      {isEmptyObj === false && item.id === EditTodo.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.HandleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
