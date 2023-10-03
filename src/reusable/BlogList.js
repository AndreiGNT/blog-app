const BlogList = ({posts, handleDelete}) => {

    return ( 
        <div className="blog-list">
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <small><p>Writter bu {post.author}</p></small>
                    <p>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                    <br />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;