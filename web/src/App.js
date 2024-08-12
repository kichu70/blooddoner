import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Donardashbord from "./Components/Donardashbord";
import Reqlst from "./Components/Reqlst";
import Adrequp from "./Components/Adrequp";
import Donerlist from "./Components/Donerlist";
import Reqstform from "./Components/Reqstform";
import Requp from "./Components/Requp";

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      
      <Box component="main">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/donardashbord" element={<Donardashbord />} />
        <Route path="/adreqlst" element={<Donerlist/>}/>
        <Route path="/adrequp" element={<Adrequp/>}/>
        <Route path="/requp" element={<Requp/>}/>
        <Route path="/requstlist" element={<Reqlst/>}/>
        <Route path="/reqform" element={<Reqstform/>}/>
      </Routes>
      
      </Box>
    </Box>
    </BrowserRouter>
  );
}

export default App;
