const RepoItemModal = props => (
  <div className="container my-5">
    {console.log("hollaforadolla", props)}

    <div className="repoModal">
      <h1>{props.repo.name}</h1>
      <p className="lead">{props.repo.description}</p>
      <i class="fas fa-star" />
    </div>
  </div>
);

export default RepoItemModal;
