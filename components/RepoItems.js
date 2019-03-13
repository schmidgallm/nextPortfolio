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

    console.log("working", this.props.repos.repos.repos);
    const repos = this.props.repos.repos.repos;
    const repoList = [];
    repos.forEach(repo => {
      repo.topics.forEach(topic => {
        if (topic.name === this.state.repoItem) {
          repoList.push(repo);
        }
      });
    });
    console.log(repoList);
    return (
      <div className="container-fluid my-5">
        <div className="row port-row">
          {this.props.topics.map(topic => {
            return (
              <button
                key={topic}
                onClick={handleStateChange}
                value={topic}
                className="btn btn-primary m-2"
              >
                {topic}
              </button>
            );
          })}
        </div>
        <div className="container my-5 repoItems">
          <div className="row">
            {repoList.map(repo => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <p>{repo.name}</p>
                </div>
              );
            })}
          </div>
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
