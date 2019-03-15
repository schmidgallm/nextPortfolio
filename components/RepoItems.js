import React, { Component } from "react";
import RepoItemModal from "./RepoItemModal";

class RepoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoItem: "",
      modal: ""
    };
  }

  render() {
    // setState to value of button clicked
    const handleStateChange = e => {
      document.querySelector(".repoItems").style.display = "block";
      this.setState({ repoItem: e.target.value });
    };

    const showRepo = repo => {
      this.setState({ modal: repo });
    };

    const getFontAwesomeIcon = icon => {
      switch (icon) {
        case "firebase":
          return "fas fa-database";
          break;
        case "graphql":
          return "fas fa-database";
          break;
        case "mongodb":
          return "fas fa-database";
          break;
        case "mysql":
          return "fas fa-database";
          break;
        case "nextjs":
          return "fab fa-react";
          break;
        case "nodejs":
          return "fab fa-node-js";
          break;
        case "react":
          return "fab fa-react";
          break;
        case "java":
          return "fab fa-java";
          break;
        default:
          return "fab fa-js-square";
      }
    };

    // put props.repos into variable for easier use
    const repos = this.props.repos.repos.repos;
    console.log(repos);
    // init empty array to hold matching repos based on topic value clicked
    const repoList = [];
    // map through repos variable and if any topic within topics array within repo object matches value of clicked button then push to repoList array
    repos.forEach(repo => {
      repo.topics.forEach(topic => {
        if (topic.name === this.state.repoItem) {
          repoList.push(repo);
        }
      });
    });
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
        <div className="container repoItems">
          <div className="row port-row">
            {repoList.map(repo => {
              return (
                <div
                  value={repo.name}
                  onClick={() => showRepo(repo)}
                  key={repo.name}
                  className="col-lg-3 col-md-4 col-sm-6 text-center port-item"
                >
                  <i className={getFontAwesomeIcon(this.state.repoItem)} />
                  <h4>{repo.name}</h4>
                  <p>{repo.description}</p>
                  <div className="icons">
                    <div className="icon">
                      <a href={repo.clone_url}>
                        <i className="fab fa-github" />
                        <p>Github</p>
                      </a>
                    </div>
                    <div className="icon">
                      {repo.homepage ? (
                        <a href={repo.homepage}>
                          <i className="fas fa-laptop-code" />
                          <p>Hosted Site</p>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container repoItemModal">
          {this.state.modal ? <RepoItemModal repo={this.state.modal} /> : null}
        </div>
        <style jsx>{`
          .repoItems {
            margin: 50px auto;
          }
          .row {
            margin: 0 auto;
          }
          .port-row {
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }
          .port-item {
            background-color: whitesmoke;
            padding: 30px 20px;
            cursor: pointer;
            margin: 10px;
            border: 1px solid #9b8650;
          }
          .port-item:hover {
            background-color: #9b8650;
          }
          i {
            font-size: 25px;
            color: black;
          }
          .lead {
            color: #000;
          }
          .icons {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
          }
          .icon a i {
            cursor: pointer;
            font-size: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default RepoItems;
