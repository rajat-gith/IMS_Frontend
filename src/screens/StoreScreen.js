import React, { useEffect, useState } from "react";
import Stores from "../components/Stores";

function StoreScreen() {
  const [buttonDesc, setButtonDesc] = useState(false);

  const [stores, setStore] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/stores/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStore(data);
        console.log(stores);
      });
  }, []);
  return (
    <div className="StoreScreen">
      <button onClick={() => setButtonDesc(true)}>
        Click to Show Product Description
      </button>
      {/* <h5>Click to Show Details of the Product</h5> */}
      <button onClick={() => setButtonDesc(false)}>Collapse</button>
      {stores && <Stores stores={stores} />}
    </div>
  );
}

export default StoreScreen;
