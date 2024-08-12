import { Add, Home, Login } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Buttons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Sappbar = styled(AppBar)({
  backgroundColor: "red",
});
const Navbar = () => {
  return (
    <Sappbar position="sticky">
      <StyledToolbar>
        <Button
          variant="contained"
          color="error"
          component={Link}
          to="/"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          home
        </Button>
        <IconButton
          component={Link}
          to="/"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Home />
        </IconButton>

        <Buttons>
          <Button
            variant="contained"
            color="error"
            component={Link}
            to="/login"
          >
            login
          </Button>

          <Button
            variant="contained"
            color="error"
            component={Link}
            to="/signup"
          >
            sign up
          </Button>
        </Buttons>
        <Icons>
          <IconButton component={Link} to="/login">
            <Login />
          </IconButton>
          <IconButton component={Link} to="/signup">
            <Add />
          </IconButton>
        </Icons>
      </StyledToolbar>
    </Sappbar>
  );
};

export default Navbar;
