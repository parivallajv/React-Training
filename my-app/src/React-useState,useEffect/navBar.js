import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( <div>
        <nav className="navbar">
            <h1>Courses</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Gallery</Link>
            </div>
        </nav>
    </div> );
}
 
export default Navbar;