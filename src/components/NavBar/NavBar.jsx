import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav>
            <Link to="/">HOME</Link>
            &nbsp; | &nbsp;
            <Link to="/services">OFFERED SERVICES </Link>
            &nbsp; | &nbsp;
            <Link to="/portfolio">PORTFOLIO</Link>

        </nav>
    )
}