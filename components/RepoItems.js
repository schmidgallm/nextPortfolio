import React, { Component } from "react";

class RepoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoItem: ""
    };
  }

  render() {
    const handleStateChange = e => {
      this.setState({ repoItem: e.target.value });
    };

    const showRepos = () => {};

    console.log(this.props);
    return (
      <div className="container-fluid my-5">
        <div className="row port-row">
          {this.props.topics.map(topic => {
            return (
              <button key={topic} value={topic} className="btn btn-primary m-2">
                {topic}
              </button>
            );
          })}
        </div>

        <style jsx>{`
          .port-row {
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default RepoItems;
