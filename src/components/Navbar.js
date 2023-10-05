import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to="/"><h1>My Blog</h1></Link>
        <h4><Link to="/">Home</Link></h4>
        <div className="links">
            <h4>
                <Link to="/contact" >Contact Us</Link> 
                <Link to="/create" >New Post</Link>   
            </h4>
        </div>
    </nav> 
    );
}
 
export default Navbar;