// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import First from './Components/First/First';
import ReactDOM from 'react-dom/client';
import About from './Pages/About'
import { Classes } from './Pages/Classes';
import Home from './Pages/Home'
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Classes' element={<Classes/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
