import axios from "axios";
import React from "react";
import "./ListUser.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      ListUser: res.data.data,
    });
  }

  HandleViewDetail = (user) => {
    this.props.history.push(`/User/${user.id}`);
  };

  render() {
    let { ListUser } = this.state;

    return (
      <div className="List-User-Container">
        <div className="Title">Fetch All List Users</div>
        <div className="Content">
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div
                  className="Child"
                  key={item.id}
                  onClick={() => this.HandleViewDetail(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
