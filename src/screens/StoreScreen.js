import React, { useEffect, useState } from "react";
import Stores from "../components/Stores";
import {useDispatch,useSelector} from 'react-redux'
import { listStores } from "../actions/storeActions";


function StoreScreen() {

  const dispatch=useDispatch();

  const storeList=useSelector((state)=>state.storeList)
  const [buttonDesc, setButtonDesc] = useState(false);
  const {error,loading,stores}=storeList;

  useEffect(() => {
    console.log(stores['brands'])
    dispatch(listStores())
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
