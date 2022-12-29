import React, { useEffect, useState } from "react";
import Stores from "../components/Stores";
import { useDispatch, useSelector } from "react-redux";
import { listStores } from "../actions/storeActions";
import "../css/StoreScreen.css";
import SearchBox from "../components/SearchBox";
import { useLocation, useNavigate } from "react-router-dom";

function StoreScreen() {
  const dispatch = useDispatch();
  const storeList = useSelector((state) => state.storeList);
  const [buttonDesc, setButtonDesc] = useState(0);
  const { error, loading, stores } = storeList;

  const navigate = useNavigate();
  const search = useLocation();
  const keyword = search.search;
  console.log(search.search);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    console.log(stores);
    dispatch(listStores(keyword));
  }, [dispatch]);
  return (
    <div className="StoreScreen">
      <h3>Store Details</h3>
      <SearchBox />

      {stores && <Stores stores={stores} triggerValue={buttonDesc} />}
    </div>
  );
}

export default StoreScreen;
