import React from "react";

class ChildComponent extends React.Component {
  state = {
    ShowHide: false,
  };

  HandleShowHide = () => {
    this.setState({
      ShowHide: !this.state.ShowHide,
    });
  };

  HandleDeleteJob = (job) => {
    this.props.DeleteAJob(job);
  };

  render() {
    let { ListJob } = this.props;
    let { ShowHide } = this.state;
    return (
      <>
        {ShowHide === false ? (
          <div>
            <button onClick={() => this.HandleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="List_Job">
              {ListJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span onClick={() => this.HandleDeleteJob(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.HandleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { ListJob } = props;
//   return (
//     <>
//       <div className="List_Job">
//         {ListJob.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.saraly}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
