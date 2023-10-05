import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../reusable/useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Andrei");
  const history = useHistory();

  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, body, author };
    // fetch("http://localhost:8000/posts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(post),
    // }).then(() => {
    //   history.push("/");
    // });
    console.log({ post });
    console.log({ event });
  };

  return (
    <div className="create">
      <h2>Update post</h2>
      <form className="blog-preview" onSubmit={handleSubmit}>
        <label>Post title: </label>
        <input
          type="text"
          required
          value={post?.title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Post body: </label>
        <textarea
          required
          value={post?.body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select
          value={post?.author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Andrei">Andrei</option>
          <option value="Lili">Lili</option>
          <option value="Elena">Elena</option>
        </select>
        <button>Update post</button>
      </form>
    </div>
  );
};

export default Create;
