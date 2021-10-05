import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin/sign-in-and-sign-up.component';

function App() {
  return (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path="/SignIn" component={SignInAndSignUpPage} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
