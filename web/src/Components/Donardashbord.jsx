import { Button, TextField, Typography, Box, Container, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Donardashbord = () => {
  const [inputs, setInputs] = useState({ name: "", age: "", blood: "", phone: "", email: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addHandler = async () => {
    if (!inputs.name || !inputs.age || !inputs.blood || !inputs.phone || !inputs.email) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (location.state !== null) {
        await axios.put(`http://localhost:3004/editr/${location.state.val._id}`, inputs);
        alert("Data updated successfully");
        navigate('/adrequp');
      } else {
        await axios.post("http://localhost:3004/addr", inputs);
        alert("Data added successfully");
        navigate('/adreqlst');
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
          Donor Dashboard
        </Typography>
        <TextField
          variant="outlined"
          label="Name"
          onChange={inputHandler}
          name="name"
          value={inputs.name}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Age"
          onChange={inputHandler}
          name="age"
          value={inputs.age}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Blood Group</InputLabel>
          <Select
            value={inputs.blood}
            onChange={inputHandler}
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
          onChange={inputHandler}
          name="email"
          value={inputs.email}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Phone"
          onChange={inputHandler}
          name="phone"
          value={inputs.phone}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={addHandler}
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate('/adreqlst')}
          fullWidth
          sx={{ mt: 2 }}
        >
          Donerlist
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/reqform')}
          fullWidth
          sx={{ mt: 2 }}
        >
          Requestform & list
        </Button>
      </Box>
    </Container>
  );
};

export default Donardashbord;
