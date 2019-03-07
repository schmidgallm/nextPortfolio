import React, { Component } from 'react'

class RepoItems extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    const repos = this.props.repos.repos.repos;
    console.log(repos);

    const onTopicClick = (e) => {
        console.log(e.target.value)
        repos.forEach(repo => {
            repo.topics.forEach(topic => {
                if(topic.includes(e.target.value)){
                    console.log(topic);
                }
            })
        })
    }

     return (
        <div className="repoItems">
            <div>
                {this.props.topics.map(topic => {
                   return <button onClick={onTopicClick} key={topic} value={topic} className="my-2 mx-2">{topic}</button>
                })}
            </div>
            <style jsx>{`
                .repoItems {
                    margin-top: 100px;
                }
            `}</style>
        </div>
    )
  }
}

export default RepoItems;