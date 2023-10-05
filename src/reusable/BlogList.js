import { Link } from "react-router-dom";

const BlogList = ({posts}) => {
    return ( 
        <div className="blog-list"> 
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <small><p>Writter bu {post.author}</p></small>
                    <p>{post.body}</p>
                    <br />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;