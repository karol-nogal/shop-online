import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop'
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInandSingUp from "./pages/sign-in-up/sign-in-up";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  
  
  state={
    currentUser : null
  }

  unsubcribeFromAuth = null

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user);

      console.log(user)
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInandSingUp}/>
      </Switch>
    </div>
  );
  }
}

export default App;
