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
import Admin from "./Components/Admin";
import Admriqlist from "./Components/Admriqlist";
import Admdonlist from "./Components/Admdonlist";
import Admilogin from "./Components/Admilogin";

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
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admriqlist" element={<Admriqlist/>}/>
        <Route path="/admdonlist" element={<Admdonlist/>}/>
        <Route path="/admlogin" element={<Admilogin/>}/>


      </Routes>
      
      </Box>
    </Box>
    </BrowserRouter>
  );
}

export default App;
