import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand text-uppercase ml-5 text-success" to="/">
        testyantra
      </Link>
     
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <Link className="nav-link" to="/" >
              Posts <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item bg-success rounded">
            <Link className="nav-link" to="/create-post">
              Create-Post
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/update-post">
              Update-Post
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="delete-post">
              Delete-Post
            </Link>
          </li> */}
        </ul>
     
      </div>
    </nav>
  );
}

export default Navbar