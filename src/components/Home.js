import BlogList from "../reusable/BlogList";
import useFetch from "../reusable/useFetch";

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts')

    return (  
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && <BlogList posts={posts}/>}
        </div>
    );
}
 
export default Home;