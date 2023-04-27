import React from "react";
import { Route, Routes,  BrowserRouter } from "react-router-dom";

import {Home} from "./Home";
import {Datails} from "./Datails";
import {SignUp} from "./SignUp";
 
export function Router() {
   return(
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Datails" element={<Datails />}/>
            <Route path="/SignUp" element={<SignUp />}/>

            </Routes>
        
  
   );
}

