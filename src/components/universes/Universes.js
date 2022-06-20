import React from "react";
import { Link } from "react-router-dom";

export const Universes = () => {
  return (
    <div className="container mt-5 animate__animated animate__fadeInLeft" >
      <div className="row ">
        <div className="col">
          <div className="row ">
            <div className=" text-center">
              <Link to={`/dc`} className="link-dark">
                <h3>
                  <b>Universe Dc</b>
                </h3>
              </Link>
            </div>

            <img
              src="\assets\dc-universe.png"
              className="rounded float-start "
              height={400}
            />
          </div>
        </div>
        <div className="col ">
          <div className="row ">
            <div className=" text-center">
              <Link to={`/marvel`} className="link-dark">
                <h3>
                  <b> Universe Marvel</b>
                </h3>
              </Link>
            </div>

            <img
              src="\assets\marvel-universe.jpg"
              className="rounded float-end  "
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
