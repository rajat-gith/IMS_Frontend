import React from "react";
import "../css/Store.css";
import BrandComponent from "./BrandComponent";

function Stores({ stores, triggerValue }) {
  return (
    <div className="storeComponent">
      {stores.map((store) => (
        <div className="store_preview" key={store._id}>
          <div className="store_details">
            <div className="name">
              <h4>{store.name}</h4>
              <div className="owner_details">
                <h4>Owner:</h4>
                <p>{store.owner.owner_name}</p>
              </div>
              <div className="tagline">
                <h4>Tagline</h4>
                {store.tagline}
              </div>
            </div>

            {store.status == "A" ? (
              <div className="A">Active</div>
            ) : (
              <div className="NA">Not Active</div>
            )}
          </div>

          <div className="brand_details">
            <h3>Brands Available</h3>
            {<BrandComponent store_brands={store.brands} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stores;
