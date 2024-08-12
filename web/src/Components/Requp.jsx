import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Requp = () => {

    var [inputs, setInputs] = useState({ name: "", age: "", blood: "", phone: "", email:"" });
    var location = useLocation();
    var navigate = useNavigate()
    console.log("loc", location.state);
  
    const inputHandlere = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      console.log(inputs);
    };
  
    const addHandlere = () => {
      console.log("clicked");
      if (location.state !== null) {
        axios
          .put("http://localhost:3004/editrr/"+location.state.val._id,inputs)
          .then((res) => {
              alert(res.data.message)
              navigate('/')
              
          })
          .catch((err) => console.log(err));
      }else{
          axios
          .post("http://localhost:3004/addrr", inputs)
          .then((res) => {
            console.log(res);
            alert(res.data.message);
            navigate('/login')
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
  
    useEffect(() => {
      if (location.state !== null) {
        setInputs({
          ...inputs,
          name: location.state.val.name,
          age: location.state.val.age,
          email: location.state.val.email,
          phone: location.state.val.phone,
          blood: location.state.val.blood
        });
      }
    }, []);
  


  return (
    <div style={{ marginTop: "3%", textAlign: "center" }}>
    <TextField
      variant="outlined"
      label="Name"
      onChange={inputHandlere}
      name="name"
      value={inputs.name}
    />
    <br />
    <br />
    <TextField
      variant="outlined"
      label="Age"
      onChange={inputHandlere}
      name="age"
      value={inputs.age}
    />
    <br />
    <br />
    <TextField
      variant="outlined"
      label="blood group"
      onChange={inputHandlere}
      name="blood"
      value={inputs.blood}
    />
    <br />
    <br />
    <TextField
      variant="outlined"
      label="email"
      onChange={inputHandlere}
      name="email"
      value={inputs.email}
    />
    <br />
    <br />
    <TextField
      variant="outlined"
      label="phone"
      onChange={inputHandlere}
      name="phone"
      value={inputs.phone}
    />
<br></br>
<br></br>
    <Button variant="contained" color="secondary" onClick={addHandlere}>
      Submit
    </Button>
  </div>
  )
}

export default Requp
