import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';



function NavBar() {
  return (
    <Navbar className="p-3">
      <Navbar.Brand as={Link} to="/">
        <span className="main-color fs-2">
          <FontAwesomeIcon icon={faMusic}/>
        </span> <span className="fs-2 text-white">Tuner</span> 
      </Navbar.Brand>

      <Nav className="">
        <Nav.Link as={Link} to="/songs">
          <span className="main-color">
            <FontAwesomeIcon icon={faPlay}/>
          </span> <span className="text-white">Songs List</span> 
        </Nav.Link>
      </Nav>

      <Nav className="ms-auto">
        <Link to="/songs/new">
        <Button variant="outline-light" className="btn-outline-main text-uppercase">Add New Song</Button>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;