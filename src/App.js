import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header'
import HomePage from './pages/HomePage'
import Order from './pages/Order'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={HomePage}/>
        <Route path="/pizza" component={Order}/>
      </div>
    </BrowserRouter>
  );
};
export default App;
