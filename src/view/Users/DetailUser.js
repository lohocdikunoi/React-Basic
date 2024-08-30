import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./DetailUser.scss";

class Detail extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res.data.data,
      });
    }
  }

  HandleBackUser = () => {
    this.props.history.push("/User");
  };

  render() {
    let { user } = this.state;

    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        {isEmptyObj === false && (
          <>
            <div>
              Name : {user.first_name} {user.last_name}
            </div>
            <div className="email">Email : {user.email}</div>
            <div>
              {" "}
              <img src={user.avatar} />
            </div>
            <button
              className="Back"
              type="button"
              onClick={() => this.HandleBackUser()}
            >
              Back
            </button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(Detail);
