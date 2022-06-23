import React from "react";

import { UniversesCard } from "./UniversesCard";

export const Universes = () => {
  return (
    <div className="container overflow-hidden mt-5 animate__animated animate__fadeInLeft">
      <div className="row gx-5 ">
        <div className="col-xsm-12">
          <div className="row gx-5  ">
            <UniversesCard
              srcurl="/assets/dc-universe.png"
              alt="Dc Universe"
              url="/dc"
              name="Dc Universe"
            />
          </div>
        </div>

        <div className="col ">
          <div className="row gx-5 ">
            <div className=" text-center">
              <UniversesCard
                srcurl={"/assets/marvel-universe.jpg"}
                alt={"Universe Marvel"}
                url={`/marvel`}
                name={"Universe Marvel"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
