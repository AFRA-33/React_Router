import { Input } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigation = useNavigate();
  return (
    <div className="app1">
      <h1>Signin Page</h1>
      <h4>Username:</h4>
      <Input  label="Outlined" variant="outlined"></Input>
      <h4>Email:</h4>
      <Input  label="Outlined" variant="outlined"></Input>
      <h4>Passward:</h4>
      <Input  label="Outlined" variant="outlined"></Input>
      {/* <Button>Submit</Button> */}
      <div>

      <button className="btnn" onClick={() => {navigation("/Home")}}>Submit</button>
      </div>
    </div>
  );
}

export default Signin;