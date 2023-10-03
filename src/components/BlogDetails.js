import { useParams } from 'react-router-dom';
import useFetch from '../reusable/useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id)

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
                <article>
                    <h2>{ post.title }</h2>
                    <small><p>Written by { post.author }</p></small>
                    <div>{ post.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;