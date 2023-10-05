import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../reusable/useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);

  useEffect(() => {
    if (!isPending && post) {
      setTitle(post.title);
      setBody(post.body);
      setAuthor(post.author);
    }
  }, [isPending, post]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToUpdate = {
      id: post.id,
      title,
      body,
      author,
    };

    fetch("http://localhost:8000/posts/" + post.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToUpdate),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((updatedData) => {
        console.log("Data updated:", updatedData);
        history.push("/");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="create">
      <h2>Update post</h2>
      <form className="blog-preview" onSubmit={handleSubmit}>
        <label>Post title: </label>
        <input
          type="postText"
          name="title"
          required
          defaultValue={post?.title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Post body: </label>
        <textarea
          required
          title="postBody"
          defaultValue={post?.body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select
          defaultValue={post?.author}
          name="postAuthor"
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
