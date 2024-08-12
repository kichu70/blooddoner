import { Button, TextField, Typography, CircularProgress, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", pass: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const { name, email, pass } = inputs;
    if (!name || !email || !pass) {
      setFormError("All fields are required.");
      return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const addHandler = async () => {
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    setError("");
    setFormError("");

    try {
      if (location.state !== null) {
        await axios.put(`http://localhost:3004/editr/${location.state.val._id}`, inputs);
        alert("Data updated successfully");
        navigate('/adrequp');
      } else {
        await axios.post("http://localhost:3004/reg", inputs);
        alert("Account created successfully");
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        name: location.state.val.name,
        email: location.state.val.email,
        pass: location.state.val.pass,
      });
    }
  }, [location.state]);

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: 400, padding: 3, borderRadius: 2, boxShadow: 3, bgcolor: '#ffffff' }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          {location.state ? "Update Your Information" : "Sign Up"}
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            label="Name"
            onChange={inputHandler}
            name="name"
            value={inputs.name}
            fullWidth
            margin="normal"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            label="Email"
            onChange={inputHandler}
            name="email"
            type="email"
            value={inputs.email}
            fullWidth
            margin="normal"
            autoComplete="email"
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            onChange={inputHandler}
            name="pass"
            type="password"
            value={inputs.pass}
            fullWidth
            margin="normal"
            autoComplete="current-password"
            required
          />
          {formError && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
              {formError}
            </Typography>
          )}
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={addHandler}
            disabled={loading}
            fullWidth
            sx={{ mt: 3 }}
          >
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
