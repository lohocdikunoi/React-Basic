import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

class Home extends React.Component {
  HandleDeleteUser = (user) => {
    this.props.DeleteUserRedux(user);
  };

  HandleCreatUser = () => {
    this.props.AddUserRedux();
  };

  render() {
    let ListUsers = this.props.DataRedux;
    return (
      <>
        <p>Hello World With React.js (Trinh Kim Vien).</p>
        {ListUsers &&
          ListUsers.length > 0 &&
          ListUsers.map((item, index) => {
            return (
              <>
                <div key={item.id}>
                  {index + 1} - {item.Name} &nbsp;{" "}
                  <span onClick={() => this.HandleDeleteUser(item)}>x</span>
                </div>
              </>
            );
          })}

        <button type="button" onClick={() => this.HandleCreatUser()}>
          Add User
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { DataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteUserRedux: (userdelete) =>
      dispatch({ type: "DELETE_USER", payload: userdelete }),
    AddUserRedux: () => dispatch({ type: "CREAT_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
