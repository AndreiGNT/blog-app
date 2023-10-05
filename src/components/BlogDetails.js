import { useParams, useHistory} from 'react-router-dom';
import useFetch from '../reusable/useFetch';


const BlogDetails = () => {
    const { id } = useParams()
    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
    };

    const dataToUpdate = {
        id: post.id,
        title: post.title,
        body: post.body,
        author: post.author
    };

    const jsonString = JSON.stringify(dataToUpdate);

    const handleUpdate = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonString
        }).then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error ${res.status}`);
            }
            return res.json();
        }).then(updatedData => {
            console.log('Data updated:', updatedData);
        }).catch(error => {
            console.error('Error updating data:', error);
        });
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
                <article className='blog-preview'>
                    <h2>{ post.title }</h2>
                    <small><p>Written by { post.author }</p></small>
                    <div>{ post.body }</div>
                    <button className='delete-btn update-btn-color' >Update</button>
                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;