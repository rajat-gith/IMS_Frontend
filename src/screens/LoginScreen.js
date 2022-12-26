import React ,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'

function LoginScreen() {
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')


 const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)

  useEffect()

return <div className="LoginScreen">
    <div className="form_container">
      <h1>Login</h1>

      <input type="email"
      placeholder="Enter Email"
       />
    </div>

  </div>;
}

export default LoginScreen;
