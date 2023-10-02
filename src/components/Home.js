import { useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'First post on this blog!!', body: 'Some written text...etc', author: 'Andrei'},
        {id: 2, title: 'Second Post', body: 'Some written text...etc', author: 'Elena'},
        {id: 3, title: 'Third Post', body: 'Lili helped me a lot in my carrier', author: 'Lili'},
        {id: 4, title: 'Forth Post', body: 'I love my girlfriend!!', author: 'Andrei'}
    ])

    return (  
        <div className="home">
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <small><p>Writter bu {post.author}</p></small>
                    <p>{post.body}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}
 
export default Home;