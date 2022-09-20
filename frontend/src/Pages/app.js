import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "bootstrap/dist/css/bootstrap.css";
import Register from  "./Rejister"
import Login from "./Login"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import axios from "axios"
import Home from "./Home"
function App(){
     
	return (
           <div>
   
            <Router>
                    <Routes>
                       <Route path ="/" element={<Login />}/>
                        <Route path ="/register" element={<Register />}/>
                        <Route path ="/home" element={<Home />}/>
                    </Routes>
        </Router>

        </div> 
	);
}

export default App;
