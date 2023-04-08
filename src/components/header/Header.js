import React from "react";
import Logo from '../../images/logo_dark.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src={Logo}
              height="35"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i
                    class="fa-sharp fa-regular fa-envelope"
                    style={{ color: "#161717" }}
                  ></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i
                    class="fa-solid fa-circle"
                    style={{ color: "#a2a5a9;", fontSize: "25px" }}
                  ></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Daniel
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-angle-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
