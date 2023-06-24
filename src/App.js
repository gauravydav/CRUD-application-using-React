import React from 'react';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import View from './View';





const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit/:id" element={<Update/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      
    </Routes>

    </BrowserRouter>
   
    
     
  );
};

export default App;
