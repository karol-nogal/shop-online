import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop'
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
