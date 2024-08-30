import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./Addcomponent";

class MyComponent extends React.Component {
  state = {
    ArrJob: [
      { id: "Job1", title: "Developers", salary: "500$" },
      { id: "Job2", title: "Tester", salary: "400$" },
      { id: "Job3", title: "Project Manegers", salary: "1000$" },
    ],
  };

  AddJob = (job) => {
    this.setState({
      ArrJob: [...this.state.ArrJob, job],
    });
  };

  DeleteAJob = (job) => {
    let CurrentJob = this.state.ArrJob;
    CurrentJob = CurrentJob.filter((item) => item.id !== job.id);
    this.setState({
      ArrJob: CurrentJob,
    });
  };

  componentDidMount() {
    console.log(">>> Run Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> Run Did Update : Prev State ",
      prevState,
      "Current State : ",
      this.state.ArrJob
    );
  }
  render() {
    return (
      <>
        <AddComponent AddJob={this.AddJob} />
        <ChildComponent
          ListJob={this.state.ArrJob}
          DeleteAJob={this.DeleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
