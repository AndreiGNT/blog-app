const Navbar = () => {
    return (
    <nav className="navbar">
        <a href="/">
            <h1>My Blog</h1>
        </a>
        <div className="links">
            <h4>
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>   
            </h4>
        </div>
    </nav> 
    );
}
 
export default Navbar;