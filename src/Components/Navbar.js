import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <Link className={"navbar-brand"} to="/">
        <h1>Vinkraset</h1>
      </Link>
      <button className={"navbar-toggler"} type={"button"}>
        <span className={"navbar-toggler-icon"}></span>
      </button>
      <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
        <div className={"navbar-nav"}>
          <Link className={"nav-item nav-link active"} to="/Home">
            Home<span className="sr-only">(current)</span>
          </Link>
          <Link className={"nav-item nav-link"} to="/card">
            Features
          </Link>
          <Link className={"nav-item nav-link"} to="/Form">
            Booking
          </Link>
          <Link className={"nav-item nav-link"} to="/Admin">
            Form
          </Link>
          <Link className={"nav-item nav-link"} to="/AdminLogin">
            Admin-login
          </Link>
          <logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
