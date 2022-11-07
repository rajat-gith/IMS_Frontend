import React, { useEffect, useState } from "react";
import Stores from "../components/Stores";
import {useDispatch,useSelector} from 'react-redux'
import { listStores } from "../actions/storeActions";
import "../css/StoreScreen.css"

function StoreScreen() {

  const dispatch=useDispatch();

  const storeList=useSelector((state)=>state.storeList)
  const [buttonDesc, setButtonDesc] = useState(0);
  const {error,loading,stores}=storeList;

  useEffect(() => {
    console.log(stores)
    dispatch(listStores())
  }, []);
  return (
    <div className="StoreScreen">
      <h3>Store Details</h3>
      {stores && <Stores stores={stores} triggerValue={buttonDesc} />}
    </div>
  );
}

export default StoreScreen;
