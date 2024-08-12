import { Button, TextField, Typography, Box, Container, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Reqstform = () => {
  const [inputs, setInputs] = useState({ name: "", age: "", blood: "", phone: "", email: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const inputHandlere = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addHandlere = async () => {
    if (!inputs.name || !inputs.age || !inputs.blood || !inputs.phone || !inputs.email) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      if (location.state !== null) {
        await axios.put(`http://localhost:3004/editrr/${location.state.val._id}`, inputs);
        alert("Data updated successfully");
        navigate('/adrequp');
      } else {
        await axios.post("http://localhost:3004/addrr", inputs);
        alert("Data added successfully");
        navigate('/requstlist');
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        name: location.state.val.name,
        age: location.state.val.age,
        email: location.state.val.email,
        phone: location.state.val.phone,
        blood: location.state.val.blood
      });
    }
  }, [location.state]);

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: '#ffffff'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Request Form
        </Typography>
        <TextField
          variant="outlined"
          label="Name"
          onChange={inputHandlere}
          name="name"
          value={inputs.name}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Age"
          onChange={inputHandlere}
          name="age"
          
          value={inputs.age}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Blood Group</InputLabel>
          <Select
            value={inputs.blood}
            onChange={inputHandlere}
            label="Blood Group"
            name="blood"
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          label="Email"
          onChange={inputHandlere}
          name="email"
          type="email"
          value={inputs.email}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Phone"
          onChange={inputHandlere}
          name="phone"
          value={inputs.phone}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={addHandlere}
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate('/requstlist')}
          fullWidth
          sx={{ mt: 2 }}
        >
          Request list
        </Button>
      </Box>
    </Container>
  );
};

export default Reqstform;
