import React from "react";
import "../css/StoreDescriptionComponent.css";


function StoreDescriptionComponent(
    trigger,
    name,
    tagline,
    ) {
  return trigger ? (
    <div className="StoreDesc">
      <div className="short_details">
        <div className="fields">
          <h4>name:</h4>
          <h5>{name}</h5>
        </div>
        <div className="fields">
          <h4>Tagline:</h4>
          <h5>{tagline}</h5>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default StoreDescriptionComponent;
