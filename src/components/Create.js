import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Andrei');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = { title, body, author };

        fetch('http://localhost:8000/posts', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            history.push('/') 
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Post</h2>
            <form className="blog-preview" onSubmit={handleSubmit}>
                <label>Post title: </label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Post body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label >Blog author: </label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}    
                >
                    <option value="Andrei">Andrei</option>
                    <option value="Lili">Lili</option>
                    <option value="Elena">Elena</option>
                </select>
                <button>Add post</button>

            </form>
        </div>
     );
}
 
export default Create;