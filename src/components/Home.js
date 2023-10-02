import { useState, useEffect } from "react";
import BlogList from "../reusable/BlogList";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'First post on this blog!!', body: 'Some written text...etc', author: 'Andrei'},
        {id: 2, title: 'Second Post', body: 'Some written text...etc', author: 'Elena'},
        {id: 3, title: 'Third Post', body: 'Lili helped me a lot in my carrier', author: 'Lili'},
        {id: 4, title: 'Forth Post', body: 'I love my girlfriend!!', author: 'Andrei'}
    ]);

    const [name, setName] = useState('Andrei')

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    useEffect(() => {
        console.log('use Effect')
    }, [name]);

    return (  
        <div className="home">
            <BlogList posts={posts} title='All posts' handleDelete={handleDelete}/>
            <button onClick={() => setName('Elena')}>change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;