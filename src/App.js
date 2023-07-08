import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {
  return <>
 <BrowserRouter>
 <Routes>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/dashboard" element={<DashBoard/>}/>
  <Route path="/*" element={<Navigate to ="/signin"/>}/>
 </Routes>
 </BrowserRouter> 
  </>
}

export default App;
