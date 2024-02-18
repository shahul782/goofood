import './App.css';
import Home from './Screens/Home';
// import Signup from './Screens/Signup.jsx';
import Login from './Screens/Login';

import Signup from './Screens/Signup.jsx';


import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import FoodList from './Screens/FoodList.jsx';
// import Signup from './Screens/signup.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/foodlist' element={<FoodList/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>



  );
}

export default App;
