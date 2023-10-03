import { useState, useEffect } from "react";
import BlogList from "../reusable/BlogList";

const Home = () => {

    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null) 

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error('Our server has a problem, come back later...');
                }
                return res.json();
            })
            .then(data => {
                setPosts(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 500);
    }, []);

    return (  
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && <BlogList posts={posts} handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;