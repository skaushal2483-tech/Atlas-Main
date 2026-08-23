import "../styles/CreatePost.css";

function CreatePost() {
  return (
    <section className="create-post">

      <div className="create-post-top">

        <div className="create-post-avatar">
          K
        </div>

        <button className="create-post-input" type="button">
          Share your progress, ask for advice, or motivate others...
        </button>

      </div>

      <div className="create-post-bottom">

        <div className="create-post-hint">
          Share something with the community
        </div>

        <button className="create-post-button" type="button">
          Post
        </button>

      </div>

    </section>
  );
}

export default CreatePost;