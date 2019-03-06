const RepoItems = props => (
    <div className="repoItems">
        <div>
            {props.topics.map(topic => {
               return <button key={topic} className="my-2 mx-2">{topic}</button>
            })}
        </div>
        <style jsx>{`
            .repoItems {
                margin-top: 100px;
            }
        `}</style>
    </div>
)

export default RepoItems;