import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { Button, Input, InputAdornment } from "@mui/material";
import { login } from "../actions/userActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from '@mui/icons-material/Email';

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  let navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/home/products/");
    }
    else{
      alert("Invalid Credentials")
    }
  }, [userInfo]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="LoginScreen">
      <Form onSubmit={submitHandler} className="form_container">
        {/* <Form.Label>LOGIN</Form.Label> */}
        <Form.Group className="emailInput" controlId="email">
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <EmailIcon
                  className="vicon"
                  onClick={togglePassword}
                ></EmailIcon>
              </InputAdornment>
            }
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Form.Group>
        <Form.Group className="passwordInput" controlId="password">
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <VisibilityIcon
                  sx={
                    {
                      cursor:"pointer"
                    }
                  }
                  className="vicon"
                  onClick={togglePassword}
                ></VisibilityIcon>
              </InputAdornment>
            }
            type={passwordShown ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginScreen;
