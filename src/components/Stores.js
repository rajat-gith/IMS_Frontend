import React from "react";
import "../css/Store.css";
import StoreDescriptionComponent from '../components/StoreDescriptionComponent'

function Stores({ stores,triggerValue }) {
  return (
    <div className="storeComponent">
      {stores.map((store) => (
        <div className="store_preview" key={store._id}>
          <div className="store_details">
            <h4>{store._id}</h4>
            <h4>{store.store_name}</h4>
            {store.status == "A" ? (
              <div className="A">Active</div>
            ) : (
              <div className="NA">Not Active</div>
            )}
          </div>
          <storeDesciptionComponent
            trigger={triggerValue}
            brand={store.brand}
            tagline={store.tagline}
          >
            <h2>My PopUP</h2>
          </storeDesciptionComponent>
        </div>
      ))}
    </div>
  );
}

export default Stores;
