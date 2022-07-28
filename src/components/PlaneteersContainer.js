import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ search, displayedPlaneteers }) {
  return (
    <ul className="cards">
      {
        displayedPlaneteers.map((planeteers) => {
          return <Planeteer key={planeteers.id} planeteerItems={planeteers} search={search} />
        })
      }
    </ul>
  );
}

export default PlaneteersContainer;
