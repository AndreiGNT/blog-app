import { useParams, useHistory } from "react-router-dom";
import useFetch from "../reusable/useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article className="blog-preview">
          <h2>{post.title}</h2>
          <small>
            <p>Written by {post.author}</p>
          </small>
          <div>{post.body}</div>
          <Link to={`/posts/${post.id}/update`}>
            <button className="delete-btn update-btn-color">Update</button>
          </Link>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
