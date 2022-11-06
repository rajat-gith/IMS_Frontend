import React from "react";
import "../css/Store.css";
import StoreDescriptionComponent from "../components/StoreDescriptionComponent";

function Stores({ stores, triggerValue }) {
  return (
    <div className="storeComponent">
      {stores.map((store) => (
        <div className="store_preview" key={store._id}>
          <div className="store_details">
            <h4>{store.name}</h4>
            {store.status == "A" ? (
              <div className="A">Active</div>
            ) : (
              <div className="NA">Not Active</div>
            )}
          </div>
          <div className="brand_details">
            {store['brand']}
          </div>
          {/* <StoreDescriptionComponent
            trigger={triggerValue}
            brand={store.brand}
            tagline={store.tagline}
          >
            <h2>My PopUP</h2>
          </StoreDescriptionComponent> */}
        </div>
      ))}
    </div>
  );
}

export default Stores;
