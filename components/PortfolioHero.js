import React, { Component } from "react";
import RepoItems from "./RepoItems";

class PortfolioHero extends Component {
  static async getInitialProps() {
    const repos = await this.props;
    return { repos };
  }

  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    // empty array to hold all non duplicate topics
    const topicsArr = [];
    // map props and push topics array in each object if topics does not contain that topic.
    this.props.repos.repos.map(repo => {
      repo.topics.forEach(topic => {
        if (topicsArr.includes(topic.name)) {
          // do nothing
        } else {
          topicsArr.push(topic.name);
        }
      });
      return topicsArr.sort();
    });
    // set state to created topicsArr
    this.setState({ topics: topicsArr });
  }

  render() {
    // handle state functino that will change modal state
    const handleStateChange = () => {
      this.setState({ modal: !this.state.modal });
    };

    // will map out repos and filter out all repos but ones that have matched value in its topics array
    const showRepos = () => {
      handleStateChange();
      console.log(this.state.modal);
    };

    return (
      <div className="portfolio container-fluid">
        <div className="title">
          <h1>Portfolio Work</h1>
          <hr />
        </div>
        <div className="topic-list text-center">
          <h4 className="my-3">Popular Search Terms</h4>
          <h5 className="my-3">
            Fun Fact: All terms are generated dynamically using{" "}
            <span className="bold">GraphQL</span> from the <span />
            <span className="bold">GitHub API</span>
          </h5>
          <RepoItems topics={this.state.topics} repos={this.props} />
        </div>
        <style jsx>{`
          .portfolio {
            margin-top: 100px;
          }
          .topic-span {
            margin: 10px;
            padding: 2px 5px;
            border-bottom: 1px solid black;
          }
          .all-topics {
            display: none;
          }
          .btn-secondary {
            border-color: #9b8650;
            background-color: #9b8650;
          }
          .btn-secondary:hover {
            background-color: #837144;
          }
          .btn-secondary:not(:disabled):not(.disabled):active,
          .btn-secondary:not(:disabled):not(.disabled).active,
          .show > .btn-primary.dropdown-toggl {
            background-color: #9b8650;
            border-color: #837144;
          }
          .btn-secondary:focus,
          .btn-secondary.focus {
            box-shadow: 0 0 0 0.2rem rgba(131, 113, 68, 0.5);
          }
          .bold {
            font-size: 1.4em;
            border-bottom: 1px solid black;
          }
          .port-row {
            display: flex;
            justify-content: center;
          }
          .btn {
            background-color: #9b8650;
            border-radius: 5px;
          }
          .btn-primary {
            border-color: #9b8650;
          }
          .btn:hover {
            background-color: #837144;
          }
          .btn-primary:not(:disabled):not(.disabled):active,
          .btn-primary:not(:disabled):not(.disabled).active,
          .show > .btn-primary.dropdown-toggl {
            background-color: #9b8650;
            border-color: #837144;
          }
          .btn-primary:focus,
          .btn-primary.focus {
            box-shadow: 0 0 0 0.2rem rgba(131, 113, 68, 0.5);
          }
        `}</style>
      </div>
    );
  }
}

export default PortfolioHero;
