import React from "react";
import { NavLink } from "react-router-dom";
import { NavComponent } from "./NavComponent";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {" "}
            Universes
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavComponent route={"/marvel"} name={"Marvel"} />
              </li>

              <li className="nav-item">
                <NavComponent route={"/dc"} name={"DC"} />
              </li>

              <li className="nav-item">
                <NavComponent route={"/search"} name={"Search"} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
