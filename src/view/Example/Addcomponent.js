import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  HandleOnChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  HandleOnChangeLasary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  HandleOnClick = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">>> Check Data State : ", this.state);
    this.props.AddJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.state.title}
          onChange={(event) => this.HandleOnChangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={this.state.salary}
          onChange={(event) => this.HandleOnChangeLasary(event)}
        />
        <br />

        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.HandleOnClick(event)}
        />
      </form>
    );
  }
}

export default AddComponent;
